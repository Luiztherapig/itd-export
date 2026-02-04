import { AnimatedSection } from "@/components/AnimatedSection";
import { Check, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface BenefitsSectionProps {
  title: string;
  subtitle: string;
  features: string[];
  highlightText?: string;
  price: string;
  registrationNumber?: string;
}

export const BenefitsSection = ({ 
  title, 
  subtitle, 
  features, 
  highlightText,
  price,
  registrationNumber 
}: BenefitsSectionProps) => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container">
        <AnimatedSection animation="fade-in-up" className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Lista de benefícios */}
          <AnimatedSection animation="fade-in-left">
            <Card className="p-8 space-y-6">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold">Procedimentos incluídos</h3>
                {highlightText && (
                  <p className="text-sm text-primary font-semibold">{highlightText}</p>
                )}
              </div>
              
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <div className="shrink-0 mt-0.5">
                      <div className="h-6 w-6 rounded-full bg-trust/10 flex items-center justify-center group-hover:bg-trust/20 transition-colors">
                        <Check className="h-4 w-4 text-trust" />
                      </div>
                    </div>
                    <span className="text-base leading-relaxed font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </AnimatedSection>

          {/* Card de preço e CTA */}
          <AnimatedSection animation="fade-in-right" className="lg:sticky lg:top-24">
            <Card className="p-8 space-y-6 bg-gradient-to-br from-primary/5 to-trust/5 border-2">
              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">Investimento</p>
                <div className="text-5xl font-bold text-primary">{price}</div>
                <p className="text-muted-foreground">/mês por pessoa</p>
              </div>

              <div className="space-y-3">
                <Button asChild size="lg" className="w-full h-14 text-lg">
                  <Link to="/contrate">
                    Contratar Agora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full h-14 text-lg">
                  <Link to="/contato">
                    Tirar Dúvidas
                  </Link>
                </Button>
              </div>

              <div className="pt-6 border-t space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-trust" />
                  Sem carência para prevenção
                </p>
                <p className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-trust" />
                  Urgência 24h
                </p>
                <p className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-trust" />
                  Inclusão de dependentes
                </p>
                {registrationNumber && (
                  <div className="mt-3 pt-3 border-t border-muted-foreground/20">
                    <p className="text-xs text-muted-foreground/80">
                      Nº de registro do produto: {registrationNumber}
                    </p>
                  </div>
                )}
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
