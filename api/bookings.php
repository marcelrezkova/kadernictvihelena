<?php
require_once 'config.php';

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        handleGet();
        break;
    case 'POST':
        handlePost();
        break;
    default:
        http_response_code(405);
        echo json_encode(['error' => 'Metoda není povolena']);
        break;
}

function handleGet() {
    global $pdo;

    if (isset($_GET['date'])) {
        $date = $_GET['date'];

        $stmt = $pdo->prepare("
            SELECT time FROM bookings
            WHERE date = ? AND status != 'cancelled'
            ORDER BY time
        ");
        $stmt->execute([$date]);
        $bookedSlots = $stmt->fetchAll(PDO::FETCH_COLUMN);

        $allSlots = [
            '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
            '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
            '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
            '17:00', '17:30'
        ];

        $availableSlots = array_values(array_diff($allSlots, $bookedSlots));

        echo json_encode(['slots' => $availableSlots]);
    } else {
        $stmt = $pdo->query("
            SELECT * FROM bookings
            WHERE date >= CURDATE() AND status != 'cancelled'
            ORDER BY date, time
        ");
        $bookings = $stmt->fetchAll();

        echo json_encode(['bookings' => $bookings]);
    }
}

function handlePost() {
    global $pdo;

    $input = json_decode(file_get_contents('php://input'), true);

    if (!$input) {
        http_response_code(400);
        echo json_encode(['error' => 'Neplatná data']);
        return;
    }

    $required = ['name', 'email', 'phone', 'service', 'date', 'time'];
    foreach ($required as $field) {
        if (empty($input[$field])) {
            http_response_code(400);
            echo json_encode(['error' => "Pole '$field' je povinné"]);
            return;
        }
    }

    $stmt = $pdo->prepare("
        SELECT COUNT(*) FROM bookings
        WHERE date = ? AND time = ? AND status != 'cancelled'
    ");
    $stmt->execute([$input['date'], $input['time']]);

    if ($stmt->fetchColumn() > 0) {
        http_response_code(409);
        echo json_encode(['error' => 'Termín je již obsazený']);
        return;
    }

    $stmt = $pdo->prepare("
        INSERT INTO bookings (name, email, phone, service, date, time, message, status, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, 'confirmed', NOW())
    ");

    try {
        $stmt->execute([
            $input['name'],
            $input['email'],
            $input['phone'],
            $input['service'],
            $input['date'],
            $input['time'],
            $input['message'] ?? ''
        ]);

        $bookingId = $pdo->lastInsertId();

        sendConfirmationEmail($input);

        echo json_encode([
            'success' => true,
            'message' => 'Rezervace byla úspěšně vytvořena',
            'booking_id' => $bookingId
        ]);

    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Chyba při vytváření rezervace']);
    }
}

function sendConfirmationEmail($data) {
    $to = $data['email'];
    $subject = 'Potvrzení rezervace - Kadeřnictví POHODA';

    $message = "
    <html>
    <body>
        <h2>Potvrzení rezervace</h2>
        <p>Dobrý den {$data['name']},</p>
        <p>Vaše rezervace byla úspěšně vytvořena.</p>

        <h3>Detail rezervace:</h3>
        <ul>
            <li><strong>Služba:</strong> {$data['service']}</li>
            <li><strong>Datum:</strong> {$data['date']}</li>
            <li><strong>Čas:</strong> {$data['time']}</li>
            <li><strong>Telefon:</strong> {$data['phone']}</li>
        </ul>

        <p>Těšíme se na Vás!</p>
        <p>Kadeřnictví POHODA - Helena Bošínová</p>
    </body>
    </html>
    ";

    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8\r\n";
    $headers .= "From: noreply@pohoda-kadernictvi.cz\r\n";

    mail($to, $subject, $message, $headers);
}
