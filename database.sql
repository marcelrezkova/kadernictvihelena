-- Databázová struktura pro rezervační systém
-- Nahrajte tento soubor do phpMyAdmin na ForSpi

CREATE TABLE IF NOT EXISTS `bookings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `service` varchar(100) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `message` text,
  `status` enum('confirmed','cancelled','completed') DEFAULT 'confirmed',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `date_time` (`date`, `time`),
  KEY `status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Index pro rychlejší vyhledávání
CREATE INDEX idx_date_status ON bookings(date, status);
CREATE INDEX idx_email ON bookings(email);
