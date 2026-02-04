import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageHero from "@/components/layout/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PlansFAQSection } from "@/components/plans/PlansFAQSection";
import { plans } from "@/data/plans";

const Plans = () => {
  return (
    <div className="w-full">
      <PageHero
        title="Escolha o plano ideal para você"
        subtitle="Todos os nossos planos incluem atendimento de urgência 24h e sem carência para procedimentos preventivos"
      />

      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="standard" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="standard">Standard</TabsTrigger>
                <TabsTrigger value="master-orto">Master Orto</TabsTrigger>
                <TabsTrigger value="vip">VIP</TabsTrigger>
              </TabsList>

              {plans.map((plan) => (
                <TabsContent key={plan.id} value={plan.id} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Informações do Plano */}
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-3xl font-bold mb-2">{plan.name}</h2>
                        <p className="text-lg text-primary font-semibold mb-4">{plan.subtitle}</p>
                        <p className="text-muted-foreground">{plan.description}</p>
                      </div>

                      <div className="bg-primary/10 p-6 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-2">A partir de</p>
                        <p className="text-4xl font-bold text-primary mb-4">
                          {plan.price}
                          <span className="text-lg font-normal text-muted-foreground">/mês</span>
                        </p>
                        <Link to="/contrate">
                          <Button className="w-full" size="lg">
                            Quero este plano
                          </Button>
                        </Link>
                        <div className="mt-4 pt-4 border-t border-primary/20">
                          <p className="text-xs text-muted-foreground">
                            Nº de registro do produto: {plan.registrationNumber}
                          </p>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-bold mb-2">Público-alvo:</h3>
                        <p className="text-muted-foreground">{plan.target}</p>
                      </div>
                    </div>

                    {/* Procedimentos Incluídos */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-xl mb-4">O que está incluído</h3>
                        <ul className="space-y-2">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-trust shrink-0 mt-0.5" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </AnimatedSection>

      {/* Tabela Comparativa */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Compare os Planos</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">Benefício</th>
                    {plans.map((plan) => (
                      <th key={plan.id} className="text-center p-4">{plan.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4">Consultas ilimitadas</td>
                    <td className="text-center p-4"><Check className="h-5 w-5 text-trust mx-auto" /></td>
                    <td className="text-center p-4"><Check className="h-5 w-5 text-trust mx-auto" /></td>
                    <td className="text-center p-4"><Check className="h-5 w-5 text-trust mx-auto" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Urgência 24h</td>
                    <td className="text-center p-4"><Check className="h-5 w-5 text-trust mx-auto" /></td>
                    <td className="text-center p-4"><Check className="h-5 w-5 text-trust mx-auto" /></td>
                    <td className="text-center p-4"><Check className="h-5 w-5 text-trust mx-auto" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Ortodontia</td>
                    <td className="text-center p-4 text-muted-foreground">—</td>
                    <td className="text-center p-4"><Check className="h-5 w-5 text-trust mx-auto" /></td>
                    <td className="text-center p-4"><Check className="h-5 w-5 text-trust mx-auto" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Clareamento</td>
                    <td className="text-center p-4 text-muted-foreground">—</td>
                    <td className="text-center p-4 text-muted-foreground">—</td>
                    <td className="text-center p-4"><Check className="h-5 w-5 text-trust mx-auto" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Atendimento prioritário</td>
                    <td className="text-center p-4 text-muted-foreground">—</td>
                    <td className="text-center p-4"><Check className="h-5 w-5 text-trust mx-auto" /></td>
                    <td className="text-center p-4"><Check className="h-5 w-5 text-trust mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* FAQ */}
      <PlansFAQSection />

      {/* CTA */}
      <AnimatedSection animation="scale-in">
        <section className="py-16 bg-gradient-to-r from-primary to-trust">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Pronto para contratar?
            </h2>
            <Link to="/contrate">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Contratar Agora
              </Button>
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Plans;
