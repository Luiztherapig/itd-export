import { Megaphone, Mail, Clock, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";

const OmbudsmanSection = () => {
  return (
    <section id="ouvidoria" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-in-right">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <Megaphone className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ouvidoria Interdental
              </h2>
              <p className="text-xl text-primary font-semibold mb-2">
                Escuta ativa, resoluções éticas
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Se você já entrou em contato com o SAC e não se sentiu atendido(a) de forma satisfatória, a Ouvidoria é o canal ideal para ouvir, avaliar e responder sua manifestação com independência e rigor.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-right" delay={100}>
            <Card className="border-2 border-accent/20 mb-6">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <CardTitle>Contato Ouvidoria</CardTitle>
                    <CardDescription>Canal oficial para manifestações</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:atendimento@interdentaldf.com.br"
                  className="text-2xl font-bold text-primary hover:underline break-all block mb-4"
                >
                  atendimento@interdentaldf.com.br
                </a>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <Clock className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-foreground">Prazo de resposta:</strong> até 7 dias úteis
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedSection animation="fade-in-right" delay={200}>
              <Card className="bg-secondary/50 h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">Garantia de Protocolo</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Todas as manifestações recebem número de protocolo para acompanhamento e garantia de resposta formal.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right" delay={300}>
              <Card className="bg-secondary/50 h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Megaphone className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">Avaliação Independente</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Seu relato será analisado por uma equipe dedicada, com imparcialidade e compromisso ético.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="scale-in" delay={400}>
            <Card className="mt-6 bg-accent/5 border-accent/20">
              <CardContent className="pt-6">
                <p className="text-center text-foreground font-medium text-lg">
                  "A Ouvidoria está aqui para assegurar seus direitos com transparência e respeito."
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default OmbudsmanSection;
