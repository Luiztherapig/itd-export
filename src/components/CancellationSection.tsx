import { XCircle, Phone, Mail, FileText, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AnimatedSection } from "@/components/AnimatedSection";

const CancellationSection = () => {
  return (
    <section id="cancelamento" className="py-16 md:py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <XCircle className="h-8 w-8 text-muted-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Solicitação de Cancelamento
              </h2>
              <p className="text-xl font-semibold mb-2">
                Cancelar seu plano? A gente entende. E facilita.
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Processo transparente e sem burocracia. Siga as instruções abaixo.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <AnimatedSection animation="fade-in-up" delay={100}>
              <Card className="border-2 h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <CardTitle>Cancelamento por Telefone</CardTitle>
                      <CardDescription>Processo imediato</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-xs">
                      1
                    </span>
                    <p className="text-sm">
                      Ligue para o SAC: <a href="tel:+556133212221" className="font-bold text-primary hover:underline">(61) 3321-2221</a>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-xs">
                      2
                    </span>
                    <p className="text-sm">
                      Solicite o cancelamento formal, informando seu CPF e número da carteirinha
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-xs">
                      3
                    </span>
                    <p className="text-sm">
                      Será gerado um número de protocolo e a data efetiva de cancelamento será informada de imediato
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200}>
              <Card className="border-2 h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <CardTitle>Cancelamento por E-mail</CardTitle>
                      <CardDescription>Formalização por escrito</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-xs">
                      1
                    </span>
                    <p className="text-sm">
                      Envie um e-mail para: <a href="mailto:atendimento@interdentaldf.com.br" className="font-bold text-primary hover:underline break-all">atendimento@interdentaldf.com.br</a>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-xs">
                      2
                    </span>
                    <p className="text-sm">
                      Informe: nome completo, CPF, número da carteirinha e motivo do cancelamento
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-xs">
                      3
                    </span>
                    <p className="text-sm">
                      Em até 5 dias úteis, seu cancelamento será processado e confirmado por e-mail
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="scale-in" delay={300}>
            <Alert className="border-warm/30 bg-warm/5">
              <AlertCircle className="h-5 w-5 text-warm" />
              <AlertDescription className="ml-2">
                <strong className="text-foreground">Atenção para planos empresariais ou coletivos por adesão:</strong> Verifique regras específicas no seu contrato ou consulte o RH da sua empresa antes de solicitar o cancelamento.
              </AlertDescription>
            </Alert>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={400}>
            <Card className="mt-6 bg-muted/30">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">Protocolo de Cancelamento</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Todo cancelamento gera um número de protocolo. Guarde-o para acompanhar o processo e garantir a confirmação oficial.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CancellationSection;
