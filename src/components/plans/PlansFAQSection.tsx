import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Palette, RefreshCw, Stethoscope, DollarSign, Users } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const plansFaqs = [
  {
    icon: Palette,
    question: "Posso fazer procedimentos somente para fins estéticos?",
    answer: "Não. Os planos cobrem procedimentos com finalidade funcional e de saúde bucal, conforme definido pela ANS. Procedimentos exclusivamente estéticos, como clareamento ou lentes de contato dental, não estão incluídos na cobertura."
  },
  {
    icon: RefreshCw,
    question: "Posso mudar de plano após adesão?",
    answer: "Sim, é possível ajustar seu plano conforme suas necessidades mudam. Entre em contato com nosso suporte para discutir suas opções."
  },
  {
    icon: Stethoscope,
    question: "Há limites para a quantidade de consultas ou de tratamentos?",
    answer: "Havendo indicação clínica, você poderá realizar consultas e tratamentos sem restrições."
  },
  {
    icon: DollarSign,
    question: "Posso solicitar reembolso, caso tenha sido atendido fora da rede credenciada do plano?",
    answer: "Se você foi atendido dentro da área de abrangência do seu plano, pode solicitar o reembolso das despesas. O valor será calculado com base na Tabela de Procedimentos Cobertos Interdental – TPCO vigente."
  },
  {
    icon: Users,
    question: "Quem posso incluir como dependente?",
    answer: `Você pode incluir como dependente:

a) cônjuge;
b) O companheiro, havendo união estável na forma da lei, sem eventual concorrência com o cônjuge salvo por decisão judicial;
c) Os filhos e enteados, ambos com até 18 anos incompletos ou, se estudantes universitários, até 24 anos incompletos;
d) Os tutelados e os menores sob guarda.`
  }
];

interface PlansFAQSectionProps {
  title?: string;
  subtitle?: string;
}

export const PlansFAQSection = ({ 
  title = "Dúvidas Frequentes sobre os Planos",
  subtitle = "Esclarecemos as principais questões sobre nossos planos odontológicos"
}: PlansFAQSectionProps) => {
  return (
    <section id="faq-planos" className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
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
            <span className="text-sm font-semibold">FAQ Planos</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            {title.split(' ').slice(0, -2).join(' ')}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-trust">
              {title.split(' ').slice(-2).join(' ')}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={200} className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {plansFaqs.map((faq, index) => {
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
                    <div className="text-muted-foreground leading-relaxed pl-14">
                      {faq.answer.includes('\n') ? (
                        <div className="space-y-2">
                          {faq.answer.split('\n').map((line, lineIndex) => (
                            <div key={lineIndex}>
                              {line.trim() && <p>{line}</p>}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p>{faq.answer}</p>
                      )}
                    </div>
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