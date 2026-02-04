import { useState } from "react";
import PlanCardEnhanced from "@/components/cards/PlanCardEnhanced";
import PlanCardPJ from "@/components/home/PlanCardPJ";
import { AnimatedSection } from "@/components/AnimatedSection";
import { plans } from "@/data/plans";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export const PlansShowcase = () => {
  const [activeTab, setActiveTab] = useState<'pf' | 'pj'>('pf');

  const planVariants: Record<string, 'standard' | 'master' | 'vip'> = {
    'standard': 'standard',
    'master-orto': 'master',
    'vip': 'vip'
  };

  return (
    <section id="planos" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container">
        {/* Toggle PF/PJ */}
        <AnimatedSection animation="fade-in-up" className="flex justify-center mb-8">
          <div className="inline-flex bg-muted rounded-full p-1.5 shadow-inner">
            <button 
              onClick={() => setActiveTab('pf')}
              className={cn(
                "px-6 py-2.5 rounded-full font-medium transition-all duration-300",
                activeTab === 'pf' 
                  ? "bg-primary text-primary-foreground shadow-lg" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Pessoa Física
            </button>
            <button 
              onClick={() => setActiveTab('pj')}
              className={cn(
                "px-6 py-2.5 rounded-full font-medium transition-all duration-300",
                activeTab === 'pj' 
                  ? "bg-primary text-primary-foreground shadow-lg" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Pessoa Jurídica
            </button>
          </div>
        </AnimatedSection>

        {/* Dynamic Title */}
        <AnimatedSection animation="fade-in-up" className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Encontre o plano ideal para {activeTab === 'pf' ? 'o seu' : 'a sua'}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-trust">
              {activeTab === 'pf' ? 'sorriso' : 'empresa'}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {activeTab === 'pf' 
              ? 'Escolha a opção que combina com suas necessidades — de cuidados essenciais à ortodontia completa e estética avançada'
              : 'Ofereça o melhor cuidado odontológico para os colaboradores da sua empresa com condições especiais'
            }
          </p>
        </AnimatedSection>

        {/* Conditional Rendering with Animation */}
        <div 
          key={activeTab} 
          className="animate-fade-slide-in"
        >
          {activeTab === 'pf' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {plans.map((plan, index) => (
                <AnimatedSection 
                  key={plan.id}
                  animation="scale-in"
                  delay={index * 150}
                >
                  <Link to={`/planos/${plan.id}`} className="block h-full">
                    <PlanCardEnhanced
                      name={plan.name}
                      description={plan.subtitle}
                      price={plan.price}
                      features={plan.features}
                      highlighted={plan.highlighted}
                      badge={plan.highlight}
                      variant={planVariants[plan.id] || 'standard'}
                      hideButton
                    />
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              <PlanCardPJ />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
