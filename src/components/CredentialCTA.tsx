import { UserPlus, ArrowRight, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CredentialCTAProps {
  variant?: "hero" | "card" | "inline" | "compact";
  showIcon?: boolean;
  buttonText?: string;
  className?: string;
}

export const CredentialCTA = ({ 
  variant = "card", 
  showIcon = true,
  buttonText = "Iniciar Cadastro",
  className = ""
}: CredentialCTAProps) => {
  
  // Variante Hero - Full width com gradient
  if (variant === "hero") {
    return (
      <section className={`py-12 md:py-16 ${className}`}>
        <div className="container">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-trust to-primary rounded-xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {showIcon && (
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                    <UserPlus className="h-8 w-8 text-white" />
                  </div>
                </div>
              )}
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Seja um Dentista Credenciado
                </h3>
                <p className="text-lg text-white/90">
                  Faça parte da nossa rede de profissionais e amplie sua base de pacientes
                </p>
              </div>

              <div className="flex-shrink-0">
                <Button asChild size="lg" variant="secondary" className="text-lg">
                  <Link to="/credenciamento">
                    {buttonText}
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Variante Card - Card com borda e sombra
  if (variant === "card") {
    return (
      <div className={`bg-background border-2 border-trust rounded-xl p-6 md:p-8 hover:shadow-xl transition-shadow ${className}`}>
        <div className="flex flex-col md:flex-row items-center gap-6">
          {showIcon && (
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-trust/10 rounded-lg flex items-center justify-center">
                <Briefcase className="h-7 w-7 text-trust" />
              </div>
            </div>
          )}
          
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">É um Profissional da Odontologia?</h3>
            <p className="text-muted-foreground mb-4">
              Cadastre-se para fazer parte da nossa rede credenciada e ampliar sua carteira de pacientes
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <Badge variant="secondary" className="bg-trust/10 text-trust border-trust/20">
                Processos simplificados
              </Badge>
              <Badge variant="secondary" className="bg-trust/10 text-trust border-trust/20">
                Suporte dedicado
              </Badge>
            </div>
          </div>

          <div className="flex-shrink-0">
            <Button asChild>
              <Link to="/credenciamento">
                {buttonText}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Variante Inline - Texto simples com link
  if (variant === "inline") {
    return (
      <Link 
        to="/credenciamento" 
        className={`inline-flex items-center gap-2 text-primary hover:underline font-medium ${className}`}
      >
        {showIcon && <UserPlus className="h-4 w-4" />}
        {buttonText}
        <ArrowRight className="h-4 w-4" />
      </Link>
    );
  }

  // Variante Compact - Para footer
  if (variant === "compact") {
    return (
      <Link 
        to="/credenciamento" 
        className={`flex items-center gap-2 hover:underline ${className}`}
      >
        {showIcon && <UserPlus className="h-4 w-4" />}
        {buttonText}
      </Link>
    );
  }

  return null;
};
