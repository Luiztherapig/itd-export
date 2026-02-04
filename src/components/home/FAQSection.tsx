import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Phone, Calendar, Smile, RefreshCw, XCircle } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const faqs = [
  {
    icon: HelpCircle,
    question: "Como aderir um plano Interdental?",
    answer: "Visite nosso site ou entre em contato direto via telefone ou WhatsApp para conhecer as opções e proceder com a adesão. Nossa equipe está pronta para ajudar a escolher o melhor plano para suas necessidades."
  },
  {
    icon: Calendar,
    question: "Como é realizado o agendamento de consultas?",
    answer: "Para realizar agendamentos e/ou cancelamento de consultas nas unidades Interdental, você pode entrar em contato com nossa Central de Agendamento pelo telefone (61) 99975-8668. Nossa central de agendamentos está disponível 24h."
  },
  {
    icon: Smile,
    question: "Os planos cobrem ortodontia e estética dental?",
    answer: "Sim, o Plano Master Orto inclui ortodontia completa com aparelhos fixos e móveis, e o Plano VIP inclui ortodontia mais clareamento dentário profissional, garantindo não apenas saúde, mas também um sorriso bonito."
  },
  {
    icon: RefreshCw,
    question: "Posso mudar de plano após a adesão?",
    answer: "Sim, é possível ajustar seu plano conforme suas necessidades mudam. Entre em contato com nosso suporte para discutir suas opções de upgrade ou mudança de plano."
  },
  {
    icon: XCircle,
    question: "Como posso cancelar meu plano se necessário?",
    answer: "Entendemos que suas necessidades podem mudar. Para cancelar seu plano, basta entrar em contato com nosso suporte ao cliente pelo telefone (61) 3321-2221, que o guiará pelo processo de forma simples e sem complicações."
  }
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Wave pattern background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
          <path d="M0,100 C300,200 600,0 900,100 L900,00 L0,0 Z" fill="#0972b5" opacity="0.3" />
          <path d="M0,200 C300,300 600,100 900,200 L900,00 L0,0 Z" fill="#40a6ab" opacity="0.3" />
        </svg>
      </div>

      <div className="container relative z-10">
        <AnimatedSection animation="fade-in-up" className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mx-auto">
            <HelpCircle className="h-4 w-4" />
            <span className="text-sm font-semibold">Dúvidas Frequentes</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            Perguntas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-trust">
              Frequentes
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos planos e serviços
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={200} className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              return (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border/50 overflow-hidden hover:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline group">
                    <div className="flex items-center gap-4 text-left">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-trust/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-semibold text-lg">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5">
                    <p className="text-muted-foreground leading-relaxed pl-14">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};
