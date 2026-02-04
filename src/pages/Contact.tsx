import PageHero from "@/components/layout/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CredentialCTA } from "@/components/CredentialCTA";
import { 
  Phone, 
  Calendar, 
  MessageCircle, 
  Wallet, 
  Mail, 
  MapPin, 
  Clock,
  ArrowRight
} from "lucide-react";

const Contact = () => {
  return (
    <div className="w-full">
      <PageHero
        title="Entre em contato"
        subtitle="Escolha o canal ideal para falar com a Interdental"
      />

      {/* Grid de Canais de Atendimento */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <AnimatedSection animation="fade-in-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Canais de Atendimento
            </h2>
            <p className="text-lg text-muted-foreground">
              Escolha a central mais adequada para sua necessidade
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Card 1: Central de Atendimento */}
            <AnimatedSection animation="fade-in-up" delay={100}>
              <Card className="h-full hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <Badge className="bg-trust/10 text-trust border-trust/20">
                      WhatsApp disponível
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">Central de Atendimento</CardTitle>
                  <CardDescription>Atendimento geral, dúvidas e suporte</CardDescription>
                </CardHeader>
                <CardContent>
                  <a 
                    href="tel:+556133212221" 
                    className="text-2xl md:text-3xl font-bold text-primary hover:underline block mb-3"
                  >
                    (61) 3321-2221
                  </a>
                  <div className="flex gap-2">
                    <Button asChild size="sm" variant="outline">
                      <a href="tel:+556133212221">
                        <Phone className="h-4 w-4" />
                        Ligar
                      </a>
                    </Button>
                    <Button asChild size="sm">
                      <a 
                        href="https://wa.me/556133212221?text=Olá!%20Venho%20do%20site%20da%20Interdental%20e%20gostaria%20de%20ajuda!" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Card 2: Central de Agendamento */}
            <AnimatedSection animation="fade-in-up" delay={200}>
              <Card className="h-full hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <Badge className="bg-trust/10 text-trust border-trust/20">
                      Via WhatsApp
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">Central de Agendamento</CardTitle>
                  <CardDescription>Agende suas consultas rapidamente</CardDescription>
                </CardHeader>
                <CardContent>
                  <a 
                    href="https://wa.me/5561999758668" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-2xl md:text-3xl font-bold text-primary hover:underline block mb-3"
                  >
                    (61) 99975-8668
                  </a>
                  <Button asChild size="sm" className="w-full">
                    <a 
                      href="https://wa.me/5561999758668?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta." 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Agendar pelo WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Card 3: Central de Relacionamento */}
            <AnimatedSection animation="fade-in-up" delay={300}>
              <Card className="h-full hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <Badge className="bg-trust/10 text-trust border-trust/20">
                      Via WhatsApp
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">Central de Relacionamento</CardTitle>
                  <CardDescription>Sugestões, elogios e reclamações</CardDescription>
                </CardHeader>
                <CardContent>
                  <a 
                    href="https://wa.me/5561998605925" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-2xl md:text-3xl font-bold text-primary hover:underline block mb-3"
                  >
                    (61) 99860-5925
                  </a>
                  <Button asChild size="sm" className="w-full">
                    <a 
                      href="https://wa.me/5561998605925?text=Olá!%20Gostaria%20de%20entrar%20em%20contato%20com%20a%20Central%20de%20Relacionamento." 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Falar pelo WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Card 4: Departamento Financeiro */}
            <AnimatedSection animation="fade-in-up" delay={400}>
              <Card className="h-full hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Wallet className="h-6 w-6 text-primary" />
                    </div>
                    <Badge className="bg-trust/10 text-trust border-trust/20">
                      Via WhatsApp
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">Departamento Financeiro</CardTitle>
                  <CardDescription>Dúvidas sobre pagamentos e mensalidades</CardDescription>
                </CardHeader>
                <CardContent>
                  <a 
                    href="https://wa.me/5561999824213" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-2xl md:text-3xl font-bold text-primary hover:underline block mb-3"
                  >
                    (61) 99982-4213
                  </a>
                  <Button asChild size="sm" className="w-full">
                    <a 
                      href="https://wa.me/5561999824213?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20pagamento." 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Falar pelo WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* CTA para Profissionais */}
          <div className="max-w-7xl mx-auto px-4 mt-6">
            <AnimatedSection animation="fade-in-up" delay={500}>
              <CredentialCTA variant="card" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Email */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-4">
          <AnimatedSection animation="fade-in-up">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-1">Email</CardTitle>
                    <CardDescription>Resposta em até 24 horas úteis</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:atendimento@interdentaldf.com.br" 
                  className="text-xl md:text-2xl font-bold text-primary hover:underline"
                >
                  atendimento@interdentaldf.com.br
                </a>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Localização e Horário */}
      <section className="py-16 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Card de Localização */}
            <AnimatedSection animation="fade-in-left">
              <Card className="h-full hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Nossa Sede</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <address className="not-italic text-muted-foreground mb-4 leading-relaxed">
                    <strong className="text-foreground block mb-1">SRTVS - Setor de Rádio e Televisão Sul</strong>
                    Edifício Palácio do Rádio II - Salas 207 a 209<br />
                    Brasília/DF
                  </address>
                  <Button asChild variant="outline" size="sm">
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=SRTVS+Palacio+do+Radio+II+Brasilia" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <MapPin className="h-4 w-4" />
                      Ver no Google Maps
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Card de Horário */}
            <AnimatedSection animation="fade-in-right">
              <Card className="h-full hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Horário de Atendimento</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="font-semibold text-foreground">Segunda a Sexta</span>
                    <span className="text-muted-foreground">8h às 18h</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="font-semibold text-foreground">Sábados</span>
                    <span className="text-muted-foreground">8h às 12h</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="font-semibold text-foreground">Domingos e Feriados</span>
                    <span className="text-muted-foreground">Fechado</span>
                  </div>
                  <div className="mt-4 p-3 bg-trust/5 rounded-lg border border-trust/20">
                    <p className="text-sm text-trust font-medium">
                      <MessageCircle className="h-4 w-4 inline mr-1" />
                      WhatsApp disponível 24h para emergências
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-primary via-trust to-primary">
        <div className="container max-w-4xl mx-auto px-4">
          <AnimatedSection animation="scale-in" className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prefere falar agora?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Nossa equipe está pronta para atender você
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <a href="tel:+556133212221">
                  <Phone className="h-5 w-5" />
                  Ligar Agora
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-white text-lg">
                <a 
                  href="https://wa.me/556133212221?text=Olá!%20Venho%20do%20site%20da%20Interdental%20e%20gostaria%20de%20ajuda!" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
