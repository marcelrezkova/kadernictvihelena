import React from 'react';
import { X } from 'lucide-react';

interface PrivacyPolicyProps {
  onClose: () => void;
}

export default function PrivacyPolicy({ onClose }: PrivacyPolicyProps) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 px-6 py-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
              Zásady ochrany osobních údajů
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-neutral-600 dark:text-neutral-400" />
            </button>
          </div>

          <div className="px-6 py-8 space-y-8 text-neutral-700 dark:text-neutral-300">
            <section>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
                Poslední aktualizace: {new Date().toLocaleDateString('cs-CZ')}
              </p>
              <p className="leading-relaxed">
                Vážíme si Vašeho soukromí. Tyto zásady popisují, jak Kadeřnictví POHODA – Helena Bošínová
                shromažďuje, používá a chrání Vaše osobní údaje v souladu s nařízením GDPR.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                1. Správce osobních údajů
              </h3>
              <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-4 space-y-1">
                <p><strong>Provozovatel:</strong> Helena Bošínová</p>
                <p><strong>Sídlo:</strong> Kadeřnictví POHODA, Moskevská 637, 460 01 Liberec</p>
                <p><strong>Email:</strong> helena.bosinova@email.cz</p>
                <p><strong>Telefon:</strong> +420 739 469 932</p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                2. Jaké údaje zpracováváme
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">
                    Při online rezervaci:
                  </h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Jméno a příjmení</li>
                    <li>E-mailová adresa</li>
                    <li>Telefonní číslo</li>
                    <li>Datum a čas rezervace</li>
                    <li>Vybraná služba</li>
                    <li>Volitelná poznámka ke službě</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">
                    Při návštěvě webu:
                  </h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Technické údaje (IP adresa, typ prohlížeče, operační systém)</li>
                    <li>Cookies pro správné fungování rezervačního systému</li>
                    <li>Cookies od Google OAuth pro autentizaci</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                3. Účel zpracování údajů
              </h3>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li><strong>Zpracování rezervací:</strong> Správa Vašich objednávek služeb</li>
                <li><strong>Komunikace:</strong> Potvrzení rezervace a připomenutí termínu</li>
                <li><strong>Provoz webu:</strong> Zajištění funkčnosti rezervačního systému</li>
                <li><strong>Google Calendar:</strong> Synchronizace rezervací pro správu termínů</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                4. Právní základ zpracování
              </h3>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li><strong>Plnění smlouvy:</strong> Zpracování rezervace (čl. 6 odst. 1 písm. b) GDPR)</li>
                <li><strong>Váš souhlas:</strong> Použití Google OAuth pro rezervace (čl. 6 odst. 1 písm. a) GDPR)</li>
                <li><strong>Oprávněný zájem:</strong> Technické cookies nutné pro provoz (čl. 6 odst. 1 písm. f) GDPR)</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                5. Sdílení údajů s třetími stranami
              </h3>
              <div className="space-y-3">
                <p><strong>Google Calendar API:</strong></p>
                <p className="ml-4 text-sm">
                  Vaše rezervační údaje jsou ukládány v Google Calendar pro správu termínů.
                  Google zpracovává údaje v souladu s jejich{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rose-600 dark:text-rose-400 hover:underline"
                  >
                    Zásadami ochrany soukromí
                  </a>.
                </p>
                <p className="text-sm">
                  <strong>Vaše údaje nesdílíme</strong> s žádnými dalšími třetími stranami pro marketingové účely.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                6. Doba uchovávání údajů
              </h3>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li><strong>Rezervační údaje:</strong> Do dokončení služby + 1 rok pro účetní účely</li>
                <li><strong>Technické logy:</strong> Maximálně 30 dní</li>
                <li><strong>Cookies:</strong> Podle nastavení prohlížeče, typicky do odhlášení</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                7. Vaše práva
              </h3>
              <p className="mb-3">Máte právo:</p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li><strong>Přístup k údajům:</strong> Zjistit, jaké údaje o Vás zpracováváme</li>
                <li><strong>Oprava údajů:</strong> Požádat o opravu nesprávných údajů</li>
                <li><strong>Výmaz údajů:</strong> Požádat o smazání Vašich údajů ("právo být zapomenut")</li>
                <li><strong>Omezení zpracování:</strong> Požádat o omezení zpracování</li>
                <li><strong>Přenositelnost:</strong> Získat údaje ve strojově čitelném formátu</li>
                <li><strong>Námitka:</strong> Vznesení námitky proti zpracování</li>
                <li><strong>Odvolání souhlasu:</strong> Kdykoliv odvolat souhlas se zpracováním</li>
              </ul>
              <p className="mt-4 text-sm bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                Pro uplatnění práv nás kontaktujte na: <strong>helena.bosinova@email.cz</strong> nebo <strong>+420 739 469 932</strong>
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                8. Zabezpečení údajů
              </h3>
              <p className="leading-relaxed">
                Vaše osobní údaje chráníme pomocí moderních technických a organizačních opatření:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside ml-4">
                <li>HTTPS šifrování veškeré komunikace</li>
                <li>Bezpečné API komunikace s Google Calendar</li>
                <li>Pravidelné bezpečnostní aktualizace</li>
                <li>Omezený přístup k osobním údajům pouze pro oprávněné osoby</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                9. Cookies
              </h3>
              <p className="leading-relaxed mb-3">
                Náš web používá cookies pro zajištění správné funkčnosti:
              </p>
              <ul className="space-y-3">
                <li>
                  <strong className="text-neutral-900 dark:text-white">Nezbytné cookies:</strong>
                  <span className="text-sm ml-2">Nutné pro provoz rezervačního systému</span>
                </li>
                <li>
                  <strong className="text-neutral-900 dark:text-white">Google OAuth cookies:</strong>
                  <span className="text-sm ml-2">Pro autentizaci a správu rezervací</span>
                </li>
              </ul>
              <p className="mt-4 text-sm">
                Cookies můžete spravovat v nastavení Vašeho prohlížeče. Odmítnutí cookies může omezit
                funkčnost rezervačního systému.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                10. Právo podat stížnost
              </h3>
              <p className="leading-relaxed">
                Pokud se domníváte, že zpracováváme Vaše údaje v rozporu s GDPR, máte právo podat
                stížnost u dozorového úřadu:
              </p>
              <div className="mt-3 bg-neutral-50 dark:bg-neutral-900 rounded-lg p-4 space-y-1 text-sm">
                <p><strong>Úřad pro ochranu osobních údajů</strong></p>
                <p>Pplk. Sochora 27, 170 00 Praha 7</p>
                <p>Web: <a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer" className="text-rose-600 dark:text-rose-400 hover:underline">www.uoou.cz</a></p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                11. Změny zásad
              </h3>
              <p className="leading-relaxed">
                Tyto zásady můžeme čas od času aktualizovat. O významných změnách Vás budeme informovat
                prostřednictvím webu nebo e-mailem. Doporučujeme pravidelně kontrolovat tuto stránku.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                12. Kontakt
              </h3>
              <p className="leading-relaxed mb-3">
                Pro jakékoli dotazy ohledně zpracování osobních údajů nás kontaktujte:
              </p>
              <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-4 space-y-2">
                <p><strong>Email:</strong> helena.bosinova@email.cz</p>
                <p><strong>Telefon:</strong> +420 739 469 932</p>
                <p><strong>Adresa:</strong> Kadeřnictví POHODA, Moskevská 637, 460 01 Liberec</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
