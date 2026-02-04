import { AnimatedSection } from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface Differential {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface DifferentialsSectionProps {
  differentials: Differential[];
}

export const DifferentialsSection = ({ differentials }: DifferentialsSectionProps) => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <AnimatedSection animation="fade-in-up" className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Mais do que um{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-trust">
              plano odontológico
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experiência completa de cuidado bucal
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedSection 
                key={index}
                animation="fade-in-up"
                delay={index * 100}
              >
                <Card className="p-6 space-y-4 hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-trust/20 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};
