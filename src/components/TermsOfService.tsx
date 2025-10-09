import React from 'react';
import { X } from 'lucide-react';

interface TermsOfServiceProps {
  onClose: () => void;
}

export default function TermsOfService({ onClose }: TermsOfServiceProps) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 px-6 py-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
              Obchodní podmínky
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
                Platné od: {new Date().toLocaleDateString('cs-CZ')}
              </p>
              <p className="leading-relaxed">
                Tyto obchodní podmínky upravují vztah mezi poskytovatelem kadeřnických služeb a klientem
                při využívání služeb Kadeřnictví POHODA – Helena Bošínová.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                1. Základní údaje
              </h3>
              <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-4 space-y-1">
                <p><strong>Poskytovatel služeb:</strong> Helena Bošínová</p>
                <p><strong>Provozovna:</strong> Kadeřnictví POHODA</p>
                <p><strong>Email:</strong> info@kadernictvi-pohoda.cz</p>
                <p><strong>Telefon:</strong> +420 XXX XXX XXX</p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                2. Rozsah služeb
              </h3>
              <p className="mb-3">Kadeřnictví POHODA poskytuje tyto služby:</p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>Dámské kadeřnické služby (střihy, barvení, trvalá, melír, atd.)</li>
                <li>Pánské a dětské kadeřnické služby</li>
                <li>Svatební účesy a styling</li>
                <li>Poradenství v oblasti péče o vlasy</li>
              </ul>
              <p className="mt-4 text-sm bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                Kompletní ceník služeb je dostupný v sekci <strong>Ceník</strong> na našich webových stránkách.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                3. Online rezervace
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">
                    3.1 Vytvoření rezervace
                  </h4>
                  <ul className="space-y-2 list-disc list-inside ml-4 text-sm">
                    <li>Rezervaci lze provést prostřednictvím online formuláře na webových stránkách</li>
                    <li>Pro rezervaci je nutné uvést: jméno, email, telefon, datum, čas a vybranou službu</li>
                    <li>Potvrzení rezervace obdržíte na zadaný email</li>
                    <li>Rezervace je závazná po obdržení potvrzení</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">
                    3.2 Změna nebo zrušení rezervace
                  </h4>
                  <ul className="space-y-2 list-disc list-inside ml-4 text-sm">
                    <li>Změnu nebo zrušení je možné provést <strong>minimálně 24 hodin</strong> před termínem</li>
                    <li>Změnu lze provést telefonicky nebo emailem</li>
                    <li>Zrušení rezervace méně než 24 hodin před termínem může být zpoplatněno</li>
                    <li>Opakované nezrušené absence mohou vést k omezení možnosti online rezervací</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">
                    3.3 Nedostavení se
                  </h4>
                  <p className="text-sm ml-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                    Při nedostavení se bez omluvení nebo opakovaném zrušení si vyhrazujeme právo
                    účtovat storno poplatek ve výši 50% ceny objednané služby nebo požadovat zálohu
                    při další rezervaci.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                4. Ceny a platební podmínky
              </h3>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 dark:text-rose-400 font-bold">•</span>
                  <span className="text-sm">
                    <strong>Ceny</strong> jsou uvedeny v aktuálním ceníku a zahrnují veškeré náklady
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 dark:text-rose-400 font-bold">•</span>
                  <span className="text-sm">
                    <strong>Platba</strong> se provádí v hotovosti nebo kartou přímo v provozovně po poskytnutí služby
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 dark:text-rose-400 font-bold">•</span>
                  <span className="text-sm">
                    <strong>Změna cen:</strong> Vyhrazujeme si právo měnit ceny. Změny se vztahují pouze
                    na nové rezervace
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 dark:text-rose-400 font-bold">•</span>
                  <span className="text-sm">
                    <strong>Finální cena</strong> může být upravena na základě skutečné náročnosti
                    služby (např. extra dlouhé vlasy, dodatečné požadavky)
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                5. Poskytnutí služby
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">
                    5.1 Povinnosti poskytovatele
                  </h4>
                  <ul className="space-y-2 list-disc list-inside ml-4 text-sm">
                    <li>Poskytnout službu profesionálně a s odbornou péčí</li>
                    <li>Používat kvalitní profesionální kosmetiku</li>
                    <li>Dodržovat hygienické standardy</li>
                    <li>Poradit s výběrem vhodného stylu a péče</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">
                    5.2 Povinnosti klienta
                  </h4>
                  <ul className="space-y-2 list-disc list-inside ml-4 text-sm">
                    <li>Dostavit se včas na domluvený termín</li>
                    <li>Informovat o případných alergiích nebo citlivosti pokožky</li>
                    <li>Upozornit na předchozí chemické ošetření vlasů</li>
                    <li>Řídit se pokyny kadeřnice během a po ošetření</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                6. Reklamace a odpovědnost
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">
                    6.1 Reklamační řád
                  </h4>
                  <ul className="space-y-2 list-disc list-inside ml-4 text-sm">
                    <li>Případné reklamace je možné uplatnit do <strong>7 dnů</strong> od poskytnutí služby</li>
                    <li>Reklamaci je nutné uplatnit osobně, telefonicky nebo emailem</li>
                    <li>Reklamaci vyřídíme do 14 dnů od jejího uplatnění</li>
                    <li>V případě oprávněné reklamace provedeme bezplatnou nápravu</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">
                    6.2 Vyloučení odpovědnosti
                  </h4>
                  <p className="text-sm ml-4 mb-2">Neneseme odpovědnost za:</p>
                  <ul className="space-y-2 list-disc list-inside ml-8 text-sm">
                    <li>Výsledek služby, pokud klient neuvedl správné informace o stavu vlasů</li>
                    <li>Alergické reakce, které klient nezanášel do dotazníku</li>
                    <li>Škody způsobené nesprávnou domácí péčí po ošetření</li>
                    <li>Očekávání klienta, které není reálně dosažitelné</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                7. Ochrana osobních údajů
              </h3>
              <p className="leading-relaxed text-sm">
                Zpracování osobních údajů se řídí platnou legislativou (GDPR) a našimi{' '}
                <button
                  onClick={onClose}
                  className="text-rose-600 dark:text-rose-400 hover:underline font-medium"
                >
                  Zásadami ochrany osobních údajů
                </button>.
                Poskytnutím osobních údajů při rezervaci dáváte souhlas s jejich zpracováním
                pro účely poskytnutí služby.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                8. Provozní doba
              </h3>
              <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-4">
                <ul className="space-y-1 text-sm">
                  <li><strong>Pondělí - Pátek:</strong> 8:00 - 18:00</li>
                  <li><strong>Sobota:</strong> 8:00 - 12:00</li>
                  <li><strong>Neděle:</strong> Zavřeno</li>
                </ul>
                <p className="mt-3 text-xs text-neutral-600 dark:text-neutral-400">
                  Změny provozní doby (např. o svátcích) jsou zveřejněny na webu a sociálních sítích.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                9. Závěrečná ustanovení
              </h3>
              <ul className="space-y-3 list-disc list-inside ml-4 text-sm">
                <li>Tyto obchodní podmínky jsou platné od data uvedeného v záhlaví</li>
                <li>Poskytovatel si vyhrazuje právo změnit tyto podmínky, o změnách informuje na webu</li>
                <li>Vztahy těmito podmínkami neupravené se řídí českým právním řádem</li>
                <li>Případné spory budou řešeny dohodou, případně příslušným soudem ČR</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                10. Mimosoudní řešení sporů
              </h3>
              <p className="leading-relaxed text-sm mb-3">
                V případě sporu máte právo obrátit se na subjekt mimosoudního řešení spotřebitelských sporů:
              </p>
              <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-4 space-y-1 text-sm">
                <p><strong>Česká obchodní inspekce</strong></p>
                <p>Štěpánská 567/15, 120 00 Praha 2</p>
                <p>Web: <a href="https://www.coi.cz" target="_blank" rel="noopener noreferrer" className="text-rose-600 dark:text-rose-400 hover:underline">www.coi.cz</a></p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                11. Kontaktní údaje
              </h3>
              <p className="leading-relaxed text-sm mb-3">
                Pro jakékoli dotazy nebo připomínky nás kontaktujte:
              </p>
              <div className="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-lg p-4 space-y-2 text-sm">
                <p><strong>Email:</strong> info@kadernictvi-pohoda.cz</p>
                <p><strong>Telefon:</strong> +420 XXX XXX XXX</p>
                <p><strong>Adresa:</strong> Kadeřnictví POHODA, [Vaše adresa]</p>
              </div>
            </section>

            <section className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
              <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center">
                Použitím našich služeb nebo provedením rezervace souhlasíte s těmito obchodními podmínkami.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
