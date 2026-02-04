import { Phone, Smartphone, FileText, Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";

const SACSection = () => {
  return (
    <section id="sac" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                SAC – Serviço de Atendimento ao Cliente
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nosso canal direto para orientações sobre planos, cobertura, rede credenciada, 2ª via de boleto e demais dúvidas administrativas. Atendimento realizado por uma equipe especializada, com geração de número de protocolo.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <AnimatedSection animation="fade-in-up" delay={100}>
              <Card className="border-2 h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Phone className="h-6 w-6 text-primary" />
                    <CardTitle>Telefone Fixo</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <a 
                    href="tel:+556133212221" 
                    className="text-2xl font-bold text-primary hover:underline"
                  >
                    (61) 3321-2221
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    Segunda a sexta, das 8h às 18h
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200}>
              <Card className="border-2 h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Smartphone className="h-6 w-6 text-trust" />
                    <CardTitle>WhatsApp</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <a 
                    href="https://wa.me/5561999758668" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-bold text-trust hover:underline"
                  >
                    (61) 99975-8668
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    Atendimento via WhatsApp Interdental
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="scale-in" delay={300}>
            <Card className="bg-secondary/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-primary" />
                  <div>
                    <CardTitle>Protocolo de Atendimento</CardTitle>
                    <CardDescription>
                      Sua garantia de registro e acompanhamento
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">
                  Ao final do atendimento telefônico, anote o <strong>número de protocolo</strong> gerado automaticamente. Ele garante o registro da sua solicitação e permite o acompanhamento.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default SACSection;
