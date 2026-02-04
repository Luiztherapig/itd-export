import { useState } from "react";
import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import CookiePreferencesModal from "./CookiePreferencesModal";

const CookieBanner = () => {
  const { hasConsent, isLoading, acceptAll, rejectAll, savePreferences, preferences } = useCookieConsent();
  const [showPreferences, setShowPreferences] = useState(false);

  // Don't render anything while loading or if consent was already given
  if (isLoading || hasConsent) {
    return null;
  }

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-full duration-500">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-foreground text-background rounded-xl shadow-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              {/* Icon and Text */}
              <div className="flex items-start gap-4 flex-1">
                <Cookie className="h-8 w-8 shrink-0 text-action" />
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Utilizamos cookies</h3>
                  <p className="text-sm text-background/80">
                    Usamos cookies para melhorar sua experiência de navegação, personalizar conteúdo e 
                    analisar nosso tráfego. Ao clicar em "Aceitar Todos", você concorda com o uso de cookies. 
                    Saiba mais em nossa{" "}
                    <Link 
                      to="/politica-de-privacidade" 
                      className="underline hover:text-background transition-colors"
                    >
                      Política de Privacidade
                    </Link>.
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Button 
                  variant="outline" 
                  onClick={rejectAll}
                  className="bg-transparent border-background/30 text-background hover:bg-background/10 hover:text-background"
                >
                  Rejeitar
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setShowPreferences(true)}
                  className="bg-transparent border-background/30 text-background hover:bg-background/10 hover:text-background"
                >
                  Personalizar
                </Button>
                <Button 
                  onClick={acceptAll}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Aceitar Todos
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CookiePreferencesModal
        open={showPreferences}
        onOpenChange={setShowPreferences}
        onSave={savePreferences}
        currentPreferences={preferences}
      />
    </>
  );
};

export default CookieBanner;
