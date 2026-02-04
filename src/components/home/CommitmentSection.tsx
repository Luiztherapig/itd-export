import { Shield, Users, Heart } from "lucide-react";
import smilingPatient from "@/assets/smiling-patient.png";
import { AnimatedSection } from "@/components/AnimatedSection";

const pillars = [
  {
    icon: Shield,
    title: "Prevenção",
    description: "Cuidados preventivos que mantêm seu sorriso saudável por toda a vida"
  },
  {
    icon: Users,
    title: "Família",
    description: "Planos pensados para toda a família, do bebê aos avós"
  },
  {
    icon: Heart,
    title: "Humanização",
    description: "Atendimento acolhedor e personalizado em cada consulta"
  }
];

export const CommitmentSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0C13.458 0 0 13.458 0 30s13.458 30 30 30 30-13.458 30-30S46.542 0 30 0zm0 58C14.561 58 2 45.439 2 30S14.561 2 30 2s28 12.561 28 28-12.561 28-28 28z' fill='%230972b5' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container relative z-10">
        <AnimatedSection animation="fade-in-up" className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <AnimatedSection animation="fade-in-right" className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-trust/20 to-primary/20 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={smilingPatient}
                alt="Consultório odontológico moderno e acolhedor da Interdental"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Floating rating badge */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-5 animate-float">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4.9</div>
                <div className="flex items-center justify-center gap-0.5 my-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-4 w-4 fill-warm text-warm" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <div className="text-xs text-muted-foreground">28 avaliações</div>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Cuidar do seu sorriso é o nosso{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-trust">
                  compromisso
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Interdental oferece planos odontológicos completos e acessíveis, com cobertura em todo o Distrito Federal. Nossos especialistas garantem atendimento de qualidade, tecnologia moderna e um cuidado humano em cada detalhe.
              </p>
            </div>

            {/* Pillars */}
            <div className="space-y-4">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <AnimatedSection 
                    key={pillar.title}
                    animation="fade-in-left"
                    delay={index * 100}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  >
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-trust/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{pillar.title}</h3>
                      <p className="text-sm text-muted-foreground">{pillar.description}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>

        </AnimatedSection>
      </div>
    </section>
  );
};
