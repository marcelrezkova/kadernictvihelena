import React from 'react';
import { Sun, Moon, Phone, Mail } from 'lucide-react';
import { useTheme } from './hooks/useTheme';
import { Container } from './components/ui/Container';
import { Section } from './components/ui/Section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './components/ui/Card';
import { Button } from './components/ui/Button';
import { Navbar } from './components/ui/Navbar';
import { Footer } from './components/ui/Footer';

function App() {
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { label: 'Domů', href: '#home' },
    { label: 'O mně', href: '#about' },
    { label: 'Služby', href: '#services' },
    { label: 'Galerie', href: '#gallery' },
    { label: 'Ceník', href: '#pricing' },
    { label: 'Rezervace', href: '#booking' },
    { label: 'Kontakt', href: '#contact' },
  ];

  const footerSections = [
    {
      title: 'Navigace',
      links: [
        { label: 'O mně', href: '#about' },
        { label: 'Služby', href: '#services' },
        { label: 'Galerie', href: '#gallery' },
        { label: 'Ceník', href: '#pricing' },
      ],
    },
    {
      title: 'Kontakt',
      links: [
        { label: 'Rezervace', href: '#booking' },
        { label: 'Kontakt', href: '#contact' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-bg text-fg font-inter">
      <Navbar
        brand={
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-brand text-brand-fg rounded-lg flex items-center justify-center">
              <span className="font-serif font-bold text-lg">H</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-serif font-bold text-lg">Helena Bošínová</div>
              <div className="text-xs text-muted">Kadeřnictví POHODA</div>
            </div>
          </div>
        }
        items={navItems}
        actions={
          <div className="flex items-center space-x-3">
            <div className="hidden lg:flex items-center space-x-4 text-sm text-muted">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>739 469 932</span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              aria-label={isDark ? 'Přepnout na světlý režim' : 'Přepnout na tmavý režim'}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        }
      />

      <main id="main-content">
        {/* Hero Section */}
        <Section id="home" size="lg" className="pt-20">
          <Container>
            <div className="grid-12">
              <div className="col-span-12 lg:col-span-8">
                <div className="stack-lg">
                  <div className="stack">
                    <h1 className="font-serif font-bold">
                      Helena Bošínová
                      <span className="block text-brand">Kadeřnictví POHODA</span>
                    </h1>
                    <p className="text-lg text-muted max-w-2xl">
                      Více než 20 let zkušeností v oboru kadeřnictví. Specializuji se na dámské, pánské 
                      i dětské střihy, barvení, melírování a společenské účesy. Každý účes vytvářím na míru.
                    </p>
                  </div>
                  <div className="cluster">
                    <Button size="lg">
                      Rezervovat termín
                    </Button>
                    <Button variant="outline" size="lg">
                      Prohlédnout služby
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* About Section */}
        <Section id="about" variant="alt">
          <Container>
            <div className="grid-12">
              <div className="col-span-12 md:col-span-8">
                <div className="stack">
                  <h2>O studiu</h2>
                  <p className="text-lg text-muted">
                    S více než 20letou praxí v oboru krásy vám nabízím profesionální péči 
                    v příjemném a moderním prostředí našeho studia.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Services Section */}
        <Section id="services">
          <Container>
            <div className="stack-lg">
              <div className="text-center stack">
                <h2>Naše služby</h2>
                <p className="text-lg text-muted max-w-3xl mx-auto">
                  Stříhám dámské, pánské, dětské. Barvím, odbarvuji, melíruji, foukám, natáčím, 
                  češu společenské i svatební účesy.
                </p>
              </div>
              
              <div className="grid-12">
                <div className="col-span-12 md:col-span-4">
                  <Card variant="elevated">
                    <CardHeader>
                      <CardTitle>Dámské kadeřnictví</CardTitle>
                      <CardDescription>
                        Střihy, mytí, foukaná a styling pro dámy
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted">od 150 Kč</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="col-span-12 md:col-span-4">
                  <Card variant="elevated">
                    <CardHeader>
                      <CardTitle>Pánské kadeřnictví</CardTitle>
                      <CardDescription>
                        Pánské střihy a úprava vousů
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted">od 200 Kč</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="col-span-12 md:col-span-4">
                  <Card variant="elevated">
                    <CardHeader>
                      <CardTitle>Barvení a melírování</CardTitle>
                      <CardDescription>
                        Barvení, odbarvování a melírování vlasů
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted">od 290 Kč</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Gallery Placeholder */}
        <Section id="gallery" variant="alt">
          <Container>
            <div className="text-center stack">
              <h2>Galerie</h2>
              <p className="text-muted">Galerie bude implementována v další fázi</p>
            </div>
          </Container>
        </Section>

        {/* Pricing Placeholder */}
        <Section id="pricing">
          <Container>
            <div className="text-center stack">
              <h2>Ceník</h2>
              <p className="text-muted">Ceník bude implementován v další fázi</p>
            </div>
          </Container>
        </Section>

        {/* Booking Placeholder */}
        <Section id="booking" variant="alt">
          <Container>
            <div className="text-center stack">
              <h2>Rezervace</h2>
              <p className="text-muted">Rezervační systém bude implementován v další fázi</p>
            </div>
          </Container>
        </Section>

        {/* Contact Section */}
        <Section id="contact">
          <Container>
            <div className="grid-12">
              <div className="col-span-12 md:col-span-6">
                <div className="stack">
                  <h2>Kontakt</h2>
                  <div className="stack-sm">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-brand" />
                      <span>739 469 932</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-brand" />
                      <span>helena.bosinova@email.cz</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <Card>
                  <CardHeader>
                    <CardTitle as="h3">Adresa</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Kadeřnictví POHODA<br />
                      Moskevská 637, Liberec<br />
                      Bezplatné parkování v Plaza
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer
        brand={
          <div className="stack">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-brand text-brand-fg rounded-lg flex items-center justify-center">
                <span className="font-serif font-bold text-xl">H</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg">Helena Bošínová</h3>
                <p className="text-sm text-muted">Kadeřnictví POHODA</p>
              </div>
            </div>
            <p className="text-sm text-muted max-w-md">
              Kadeřnice a kosmetická poradkyně MK s více než 20letou praxí. 
              Specializuji se na dámské, pánské a dětské kadeřnictví.
            </p>
          </div>
        }
        sections={footerSections}
        bottom={
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted">
              © 2024 Helena Bošínová - Kadeřnictví POHODA. Všechna práva vyhrazena.
            </p>
            <div className="text-sm text-muted">
              Dámské • Pánské • Dětské • Holičství
            </div>
          </div>
        }
      />
    </div>
  );
}

export default App;