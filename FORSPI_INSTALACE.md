# Instalační příručka pro ForSpi hosting

## 1. Příprava souborů

### Soubory k nahrání na ForSpi:
```
/
├── api/
│   ├── config.php
│   └── bookings.php
├── dist/              (obsah po build)
├── database.sql
├── .htaccess
└── README.md
```

## 2. Nastavení databáze

### Krok 1: Vytvoření databáze
1. Přihlaste se do **cPanel** na ForSpi
2. Přejděte do **phpMyAdmin**
3. Vytvořte novou databázi (např. `pohoda_db`)
4. Vytvořte databázového uživatele a přiřaďte mu všechna oprávnění k databázi

### Krok 2: Import struktury
1. V phpMyAdmin vyberte vytvořenou databázi
2. Klikněte na záložku **Import**
3. Nahrajte soubor `database.sql`
4. Klikněte na **Provést**

## 3. Konfigurace

### Upravte soubor `api/config.php`:
```php
define('DB_HOST', 'localhost');
define('DB_NAME', 'vase_databaze');      // Název vaší databáze
define('DB_USER', 'vase_uzivatelske_jmeno');  // Databázový uživatel
define('DB_PASS', 'vase_heslo');         // Databázové heslo
```

### E-mailové nastavení
V souboru `api/bookings.php` na řádku ~97 upravte:
```php
$headers .= "From: noreply@vase-domena.cz\r\n";
```

## 4. Nahrání souborů

### Pomocí FTP (FileZilla):
1. Připojte se k FTP na ForSpi
2. Nahrajte:
   - Složku `api/` do hlavního adresáře
   - Obsah složky `dist/` do hlavního adresáře
   - Soubor `.htaccess` do hlavního adresáře

### Struktura na serveru:
```
/public_html/
├── api/
│   ├── config.php
│   └── bookings.php
├── assets/
├── gallery/
├── index.html
├── logo.png
└── .htaccess
```

## 5. Testování

### Test 1: Základní funkčnost
Otevřete: `https://vase-domena.cz`
- Měla by se načíst hlavní stránka

### Test 2: API endpoint
Otevřete: `https://vase-domena.cz/api/bookings.php?date=2025-12-31`
- Měli byste vidět JSON odpověď: `{"slots":[...]}`

### Test 3: Rezervační formulář
1. Přejděte na sekci **Rezervace**
2. Vyplňte formulář
3. Odešlete rezervaci
4. Zkontrolujte v phpMyAdmin, zda se záznam vytvořil v tabulce `bookings`

## 6. Řešení problémů

### Chyba: "500 Internal Server Error"
- Zkontrolujte oprávnění souborů (644 pro soubory, 755 pro složky)
- Zkontrolujte logs v cPanel → Error Log

### Chyba: "Chyba připojení k databázi"
- Ověřte přihlašovací údaje v `api/config.php`
- Zkontrolujte, že databázový uživatel má oprávnění k databázi

### Nefunguje .htaccess
- Zkontrolujte, že máte povolen mod_rewrite v cPanel
- Zkontrolujte, že soubor je pojmenován přesně `.htaccess`

### E-maily se neodesílají
- ForSpi může mít omezení na odesílání e-mailů
- Kontaktujte podporu ForSpi pro nastavení SMTP

## 7. Údržba

### Záloha databáze
1. V phpMyAdmin vyberte databázi
2. Export → Quick → Go
3. Stáhněte .sql soubor

### Sledování rezervací
- Přihlaste se do phpMyAdmin
- Otevřete tabulku `bookings`
- Zde vidíte všechny rezervace

## 8. Volitelná vylepšení

### SSL certifikát
ForSpi nabízí bezplatné Let's Encrypt certifikáty:
1. cPanel → SSL/TLS
2. Zapněte AutoSSL

### Emailové notifikace
Pro spolehlivější doručování nastavte SMTP:
1. Kontaktujte podporu ForSpi
2. Požádejte o SMTP údaje
3. Upravte funkci `sendConfirmationEmail()` v `api/bookings.php`

### Admin rozhraní
Pro správu rezervací můžete vytvořit jednoduchý admin panel:
- Přihlášení pro administrátora
- Seznam všech rezervací
- Možnost zrušení/potvrzení rezervace

## 9. Kontakt na podporu

ForSpi podpora:
- Web: https://www.forpsi.com/podpora
- Telefon: 246 035 835
- E-mail: info@forpsi.com
