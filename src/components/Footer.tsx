import { useState } from "react";
import { Phone, Mail, UserPlus, Cookie } from "lucide-react";
import { Link } from "react-router-dom";
import logoInterdentalWhite from "@/assets/logo-interdental-white.png";
import ansTarja from "@/assets/ans-tarja.avif";
import ansLogo from "@/assets/ans-logo.avif";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import CookiePreferencesModal from "./CookiePreferencesModal";

const Footer = () => {
  const [showCookiePreferences, setShowCookiePreferences] = useState(false);
  const { preferences, savePreferences } = useCookieConsent();

  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/90 text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Coluna 1 - Identidade e ANS */}
            <div className="space-y-6">
              <img 
                src={logoInterdentalWhite} 
                alt="Interdental Planos Odontológicos" 
                className="h-20 md:h-24 object-contain"
              />
              
              {/* Logo ANS */}
              <a 
                href="https://www.ans.gov.br"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity"
              >
                <img 
                  src={ansLogo} 
                  alt="Agência Nacional de Saúde Suplementar"
                  className="h-12 w-auto object-contain opacity-80"
                />
              </a>
              
              {/* Tarja ANS com link */}
              <img 
                src={ansTarja} 
                alt="ANS nº 314757 - Agência Nacional de Saúde Suplementar"
                className="h-6 w-auto object-contain"
              />
              
            </div>

            {/* Coluna 2 - Horário */}
            <div>
              <h3 className="font-bold text-lg mb-4">Horário de Funcionamento</h3>
              <div className="text-sm text-background/80 space-y-1">
                <p className="font-semibold">Segunda à Sexta</p>
                <p>08h às 18h</p>
              </div>
            </div>

            {/* Coluna 3 - Contato */}
            <div>
              <h3 className="font-bold text-lg mb-4">Contato</h3>
              <ul className="space-y-2 text-sm text-background/80">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0" />
                  <a href="mailto:atendimento@interdentaldf.com.br" className="hover:underline break-all">
                    atendimento@interdentaldf.com.br
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0" />
                  <a href="tel:+556133212221" className="hover:underline">
                    (61) 3321-2221
                  </a>
                </li>
                <li className="flex items-center gap-2 mt-4 pt-4 border-t border-background/20">
                  <UserPlus className="h-4 w-4 shrink-0" />
                  <Link to="/credenciamento" className="hover:underline">
                    Seja um Credenciado
                  </Link>
                </li>
              </ul>
            </div>

            {/* Coluna 4 - Aplicativo */}
            <div>
              <h3 className="font-bold text-lg mb-4">Aplicativo</h3>
              <div className="space-y-2">
                <div className="bg-background/10 px-4 py-2 rounded text-sm text-background/60">
                  <span className="block font-medium text-background/80">Em breve</span>
                  <span className="text-xs">Google Play e App Store</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="text-center md:text-left space-y-2 text-sm text-background/70">
                <p>© Interdental, Todos os Direitos Reservados</p>
                <p>CNPJ: 37.161.015/0001-41</p>
                <p className="text-xs">
                  SRTVS – Setor de Rádio e Televisão Sul – Edifício Palácio do Rádio II – Salas 207 e 209, Brasília/DF
                </p>
              </div>
              <div className="text-center md:text-right flex flex-col sm:flex-row gap-2 sm:gap-4">
                <Link 
                  to="/termos-de-uso" 
                  className="text-sm text-background/70 hover:text-background transition-colors hover:underline"
                >
                  Termos de Uso
                </Link>
                <Link 
                  to="/politica-de-privacidade" 
                  className="text-sm text-background/70 hover:text-background transition-colors hover:underline"
                >
                  Política de Privacidade
                </Link>
                <Link 
                  to="/transparencia" 
                  className="text-sm text-background/70 hover:text-background transition-colors hover:underline"
                >
                  Transparência
                </Link>
                <button 
                  onClick={() => setShowCookiePreferences(true)}
                  className="text-sm text-background/70 hover:text-background transition-colors hover:underline flex items-center gap-1 justify-center sm:justify-start"
                >
                  <Cookie className="h-3.5 w-3.5" />
                  Preferências de Cookies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CookiePreferencesModal
        open={showCookiePreferences}
        onOpenChange={setShowCookiePreferences}
        onSave={savePreferences}
        currentPreferences={preferences}
      />
    </footer>
  );
};

export default Footer;
