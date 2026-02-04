import { Ear, Mail, MessageCircle, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/AnimatedSection";

const AccessibilitySection = () => {
  return (
    <section id="acessibilidade" className="py-16 md:py-20 bg-gradient-to-br from-trust/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-in-left">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-trust/10 mb-4">
                <Ear className="h-8 w-8 text-trust" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Atendimento Inclusivo
              </h2>
              <p className="text-xl text-trust font-semibold mb-2">
                Para Pessoas com Deficiência Auditiva ou de Fala
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A Interdental valoriza a inclusão e disponibiliza canais adaptados para atender beneficiários com deficiência auditiva ou de fala.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedSection animation="fade-in-left" delay={100}>
              <Card className="border-2 border-trust/20 h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <MessageCircle className="h-6 w-6 text-trust" />
                      <div>
                        <CardTitle>WhatsApp com Suporte em Texto</CardTitle>
                        <CardDescription>Atendimento escrito disponível</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <a 
                    href="https://wa.me/5561999758668" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-bold text-trust hover:underline block"
                  >
                    (61) 99975-8668
                  </a>
                  <p className="text-sm text-muted-foreground mt-3">
                    Envie mensagens de texto e nossa equipe responderá com toda atenção
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-left" delay={200}>
              <Card className="border-2 border-trust/20 h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Mail className="h-6 w-6 text-trust" />
                      <div>
                        <CardTitle>E-mail Exclusivo</CardTitle>
                        <CardDescription>Canal dedicado à inclusão</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <a 
                    href="mailto:atendimento@interdentaldf.com.br"
                    className="text-xl font-bold text-trust hover:underline break-all block"
                  >
                    atendimento@interdentaldf.com.br
                  </a>
                  <p className="text-sm text-muted-foreground mt-3">
                    Atendimento prioritário com resposta em até 48 horas
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="scale-in" delay={300}>
            <Card className="mt-6 bg-muted/20 border-muted-foreground/20 opacity-60">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-muted-foreground" />
                    <div>
                      <CardTitle className="text-muted-foreground">Atendimento por Libras via Videochamada</CardTitle>
                      <CardDescription className="text-muted-foreground/80">Canal em desenvolvimento</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-muted-foreground/20 text-muted-foreground border-muted-foreground/30">
                    Em breve
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground/80">
                  Estamos trabalhando para oferecer atendimento com intérprete de Libras em tempo real através de videochamada.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AccessibilitySection;
