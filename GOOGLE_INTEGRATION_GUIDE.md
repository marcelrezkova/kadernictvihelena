# 🔧 Průvodce Google integracemi

## 📅 Google Calendar API integrace

### 1. **Environment Variables (.env)**
```bash
# Google Calendar API konfigurace
VITE_GOOGLE_API_KEY=your_google_api_key_here
VITE_GOOGLE_CLIENT_ID=your_google_client_id_here
```

### 2. **Google Cloud Console nastavení:**

**Krok 1: Vytvoření projektu**
- Jít na: https://console.cloud.google.com
- Vytvořit nový projekt nebo vybrat existující

**Krok 2: Aktivace Calendar API**
- V menu vlevo: APIs & Services > Library
- Vyhledat "Google Calendar API"
- Kliknout na "Enable"

**Krok 3: Vytvoření API Key**
- APIs & Services > Credentials
- Kliknout "+ CREATE CREDENTIALS" > "API Key"
- Zkopírovat klíč do .env jako VITE_GOOGLE_API_KEY
- (Doporučeno) Omezit klíč jen na Calendar API a vaši doménu

**Krok 4: Nastavení OAuth 2.0 (pro vytváření událostí)**
- V Credentials kliknout "+ CREATE CREDENTIALS" > "OAuth client ID"
- Pokud nemáte nakonfigurovaný OAuth consent screen:
  - Kliknout "CONFIGURE CONSENT SCREEN"
  - Vybrat "External" a kliknout CREATE
  - Vyplnit povinné údaje (App name, Support email)
  - V sekci Scopes přidat: .../auth/calendar.events
  - Uložit a pokračovat
- Zpět v Credentials > Create OAuth client ID:
  - Application type: "Web application"
  - Authorized JavaScript origins: http://localhost:5173 a vaše produkční URL
  - Zkopírovat Client ID do .env jako VITE_GOOGLE_CLIENT_ID

**Krok 5: Nastavení kalendáře helena.rakova.hr@gmail.com**
- Přihlásit se do Google Calendar pod účtem helena.rakova.hr@gmail.com
- Nastavení kalendáře > Sdílení > Veřejný přístup
- Zaškrtnout "Zveřejnit" (aby API mohlo číst volné termíny)
- Kalendář ID je: helena.rakova.hr@gmail.com

### 3. **Jak to funguje:**

✅ **Již implementováno:**
- Integrace je aktivní v `src/components/Booking.tsx`
- Načítání volných termínů z kalendáře helena.rakova.hr@gmail.com
- Automatické zobrazení obsazených časů
- Rezervace se odesílá emailem na helena.bosinova@email.cz

⚙️ **Co se děje po vyplnění API klíčů:**
1. Při výběru data se automaticky načtou dostupné časy z Google Calendar
2. Obsazené termíny se nezobrazí v nabídce časů
3. Uživatel vidí jen volné sloty
4. Po odeslání formuláře se vytvoří žádost o rezervaci emailem

---

## 🗺️ Google Maps

✅ **Již implementováno:**
- Mapa je zobrazena v sekci Kontakt
- Adresa: Moskevská 637, 460 01 Liberec
- Používá veřejný Google Maps embed (nevyžaduje API klíč)

---

## 📋 Kontrolní seznam aktivace:

### Google Calendar API:
- [ ] Vytvořit Google Cloud projekt
- [ ] Zapnout Calendar API v APIs & Services > Library
- [ ] Vytvořit API klíč (pro čtení kalendáře)
- [ ] Vytvořit OAuth 2.0 Client ID (pro vytváření událostí)
- [ ] Zkopírovat oba klíče do .env souboru:
  - `VITE_GOOGLE_API_KEY=váš_api_klíč`
  - `VITE_GOOGLE_CLIENT_ID=váš_client_id`
- [ ] Zveřejnit kalendář helena.rakova.hr@gmail.com (Settings > Share)
- [ ] Restartovat dev server: `npm run dev`
- [ ] Otestovat načítání volných termínů

---

## 🚀 Testování:

```bash
# 1. Vyplnit API klíče v .env souboru
nano .env  # nebo jiný editor

# 2. Restartovat dev server
npm run dev

# 3. Otevřít v prohlížeči
http://localhost:5173

# 4. Přejít na sekci Rezervace
# 5. Vybrat datum - měly by se načíst dostupné časy z kalendáře
```

## ⚠️ Časté problémy:

**Kalendář se nenačítá:**
- Zkontrolujte že kalendář je zveřejněný
- Ověřte že API klíč má oprávnění pro Calendar API
- Otevřete konzoli prohlížeče (F12) a hledejte chyby

**API chyba 403:**
- API klíč není správně nakonfigurovaný
- Zkontrolujte omezení klíče v Google Cloud Console

**OAuth nefunguje:**
- Zkontrolujte Authorized JavaScript origins
- Ověřte že máte správný Client ID

---

## 📞 Kontakt pro podporu:
Pokud budete potřebovat pomoct s nastavením, stačí se ozvat!