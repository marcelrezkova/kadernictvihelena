# 🔧 Průvodce Google integracemi

## 📅 Google Calendar API integrace

### 1. **Environment Variables (.env)**
```bash
# Google Calendar API konfigurace
REACT_APP_GOOGLE_API_KEY=your_google_api_key_here
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id_here
REACT_APP_GOOGLE_CALENDAR_ID=primary
```

### 2. **Google Cloud Console nastavení:**
- Jít na: https://console.cloud.google.com
- Vytvořit nový projekt nebo vybrat existující
- Zapnout Google Calendar API
- Vytvořit credentials:
  - API Key pro čtení kalendáře
  - OAuth 2.0 Client ID pro vytváření událostí

### 3. **Soubory k aktivaci:**

#### `src/components/Booking.tsx` (řádky 4-6):
```typescript
// Odkomentovat tyto importy:
// import { useGoogleCalendar } from '../hooks/useGoogleCalendar';
// import { googleCalendarService } from '../services/googleCalendar';
```

#### `src/components/Booking.tsx` (řádky 15-17):
```typescript
// Odkomentovat Google Calendar hook:
// const { isInitialized, isAuthorized, authorize } = useGoogleCalendar();
// const [availableSlots, setAvailableSlots] = useState<string[]>([]);
```

#### `src/components/Booking.tsx` (řádky 35-55):
```typescript
// Odkomentovat funkci pro načítání dostupných časů:
// const loadAvailableSlots = async (selectedDate: string) => {
//   if (!isInitialized || !isAuthorized) return;
//   
//   try {
//     const slots = await googleCalendarService.getAvailableSlots(selectedDate);
//     setAvailableSlots(slots);
//   } catch (error) {
//     console.error('Chyba při načítání dostupných časů:', error);
//   }
// };
```

#### `src/components/Booking.tsx` (řádky 57-85):
```typescript
// Odkomentovat hlavní submit funkci s Google Calendar:
// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   setIsLoading(true);
//
//   try {
//     if (!isAuthorized) {
//       const authorized = await authorize();
//       if (!authorized) {
//         throw new Error('Nepodařilo se autorizovat přístup ke kalendáři');
//       }
//     }
//
//     // Kontrola dostupnosti termínu
//     const isAvailable = await googleCalendarService.checkAvailability(
//       formData.date, 
//       formData.time
//     );
//
//     if (!isAvailable) {
//       throw new Error('Vybraný termín již není dostupný');
//     }
//
//     // Vytvoření rezervace v Google Calendar
//     const eventId = await googleCalendarService.createBooking(formData);
//     console.log('Rezervace vytvořena s ID:', eventId);
//     
//     setIsSubmitted(true);
//     // ... zbytek kódu
//   } catch (error) {
//     // ... error handling
//   }
// };
```

#### `src/components/Booking.tsx` (řádky 200-210):
```typescript
// Odkomentovat useEffect pro načítání časů:
// useEffect(() => {
//   if (formData.date && isAuthorized) {
//     loadAvailableSlots(formData.date);
//   }
// }, [formData.date, isAuthorized]);
```

#### `src/components/Booking.tsx` (řádky 350-355):
```typescript
// Změnit availableTimes na:
// {(availableSlots.length > 0 ? availableSlots : availableTimes).map((time) => (
```

---

## 🗺️ Google Maps integrace

### 1. **Google Maps API klíč:**
```bash
# Přidat do .env
REACT_APP_GOOGLE_MAPS_API_KEY=your_maps_api_key_here
```

### 2. **Google Cloud Console:**
- Zapnout Maps JavaScript API
- Vytvořit API klíč pro Maps

### 3. **Soubor k úpravě:**

#### `src/components/Contact.tsx` (řádky 180-190):
```typescript
// Nahradit src v iframe:
src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&q=Moskevská+637,+Liberec,+Czech+Republic`}
```

#### Nebo použít přesnější embed URL:
```typescript
src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.123!2d15.0558!3d50.7663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMoskevsk%C3%A1%20637%2C%20460%2001%20Liberec!5e0!3m2!1scs!2scz!4v1234567890123!5m2!1scs!2scz&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
```

---

## 📋 Kontrolní seznam aktivace:

### Google Calendar:
- [ ] Vytvořit Google Cloud projekt
- [ ] Zapnout Calendar API
- [ ] Vytvořit API klíč a OAuth Client ID
- [ ] Nastavit .env proměnné
- [ ] Odkomentovat kód v Booking.tsx
- [ ] Otestovat rezervační systém

### Google Maps:
- [ ] Zapnout Maps JavaScript API
- [ ] Vytvořit Maps API klíč
- [ ] Přidat REACT_APP_GOOGLE_MAPS_API_KEY do .env
- [ ] Aktualizovat iframe src v Contact.tsx
- [ ] Otestovat zobrazení mapy

---

## 🚀 Spuštění po aktivaci:

```bash
# 1. Nastavit .env soubor
cp .env.example .env
# Vyplnit API klíče

# 2. Restartovat dev server
npm run dev

# 3. Otestovat funkčnost
```

---

## 📞 Kontakt pro podporu:
Pokud budete potřebovat pomoct s nastavením, stačí se ozvat!