import { AnimatedSection } from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface Persona {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface TargetAudienceSectionProps {
  title: string;
  description: string;
  personas: Persona[];
}

export const TargetAudienceSection = ({ title, description, personas }: TargetAudienceSectionProps) => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <AnimatedSection animation="fade-in-up" className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {personas.map((persona, index) => {
            const Icon = persona.icon;
            return (
              <AnimatedSection 
                key={index}
                animation="scale-in"
                delay={index * 150}
              >
                <Card className="p-8 text-center space-y-4 hover:shadow-xl transition-shadow h-full">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-trust/20 flex items-center justify-center mx-auto">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{persona.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {persona.description}
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
