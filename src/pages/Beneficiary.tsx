import { User, Building2, Calendar, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PageHero from "@/components/layout/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";

const Beneficiary = () => {
  const quickAccessCards = [
    {
      icon: User,
      title: "Pessoa Física",
      description: "Acesse o portal para beneficiários individuais",
      action: "Acessar Portal",
      link: "https://www.oazez.com.br/intranet/index2.php?cliente=interdental",
      available: true
    },
    {
      icon: Building2,
      title: "Pessoa Jurídica",
      description: "Acesse o portal para empresas e RH",
      action: "Acessar Portal",
      link: "https://www.oazez.com.br/intranet/index2.php?cliente=interdental",
      available: true
    }
  ];

  const steps = [
    { number: "1", title: "Consulte a rede credenciada", description: "Encontre o dentista mais próximo" },
    { number: "2", title: "Entre em contato", description: "Ligue ou use o WhatsApp do profissional" },
    { number: "3", title: "Informe a Rede Interdental", description: "Através de nossa Central de Relacionamento" },
    { number: "4", title: "Realize sua consulta", description: "Aproveite seu atendimento" }
  ];

  return (
    <div className="w-full">
      <PageHero
        title="Área do Beneficiário"
        subtitle="Acesse seus documentos e gerencie seu plano"
      />

      {/* Cards de Acesso Rápido */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Acesso Rápido</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {quickAccessCards.map((card, index) => (
                <Card 
                  key={index} 
                  className={`transition-all ${
                    card.available 
                      ? "hover:shadow-lg" 
                      : "opacity-40 cursor-not-allowed"
                  }`}
                >
                  <CardHeader>
                    <card.icon className={`h-12 w-12 mb-4 ${
                      card.available ? "text-primary" : "text-muted-foreground"
                    }`} />
                    <CardTitle className={card.available ? "" : "text-muted-foreground"}>
                      {card.title}
                    </CardTitle>
                    <CardDescription className={card.available ? "" : "text-muted-foreground/60"}>
                      {card.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {card.available ? (
                      <Button className="w-full" asChild>
                        <a href={card.link}>{card.action}</a>
                      </Button>
                    ) : (
                      <Button 
                        className="w-full" 
                        variant="secondary" 
                        disabled
                      >
                        {card.action}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Regras de Utilização */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Regras de Utilização</h2>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Como usar seu plano</AccordionTrigger>
                <AccordionContent>
                  Para usar seu plano, consulte a rede credenciada, entre em contato com o dentista 
                  escolhido e apresente sua carteirinha no momento do atendimento. Não é necessário 
                  autorização prévia para consultas e procedimentos preventivos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Limites e franquias</AccordionTrigger>
                <AccordionContent>
                  Consultas, limpezas e procedimentos preventivos são ilimitados. Para procedimentos 
                  específicos como ortodontia e próteses, consulte as condições do seu plano contratado.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Prazos e autorizações</AccordionTrigger>
                <AccordionContent>
                  Procedimentos de urgência não necessitam autorização prévia. Para tratamentos 
                  planejados como implantes e próteses, é necessário solicitar autorização com 
                  até 48h de antecedência através do SAC.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Direitos e deveres</AccordionTrigger>
                <AccordionContent>
                  Você tem direito a atendimento de qualidade, informações claras sobre seu plano 
                  e acesso à rede credenciada. É seu dever manter o pagamento em dia, apresentar 
                  a carteirinha válida e seguir as orientações do dentista.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </AnimatedSection>

      {/* Guia de Agendamento */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Como Agendar sua Consulta</h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Cancelamento */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <HelpCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4">Precisa cancelar?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Entenda como funciona o processo de cancelamento e quais são seus direitos
            </p>
            <Link to="/atendimento#cancelamento">
              <Button variant="outline" size="lg">
                Ver informações sobre cancelamento
              </Button>
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Beneficiary;
