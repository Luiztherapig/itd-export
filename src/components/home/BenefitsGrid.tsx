import { FileText, Cpu, Network, MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { StatsCounter } from "@/components/ui/stats-counter";
import patientCare from "@/assets/patient-care.avif";
import dentalTechnology from "@/assets/dental-technology.png";

const benefits = [
  {
    icon: FileText,
    title: "Burocracia Zero",
    description: "Processos simplificados e sem complicações para adesão e uso"
  },
  {
    icon: Cpu,
    title: "Tecnologia Avançada",
    description: "Diagnósticos e tratamentos com tecnologia de ponta e precisão"
  },
  {
    icon: Network,
    title: "Rede Credenciada Especializada",
    description: "Profissionais rigorosamente selecionados, com foco em qualidade e excelência"
  }
];

export const BenefitsGrid = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={patientCare} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="container relative z-10">
        <AnimatedSection animation="fade-in-up" className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Cobertura total, sem burocracia e com{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-trust">
              tecnologia de ponta
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Na Interdental, cada plano oferece acesso rápido e fácil a uma ampla rede de especialistas credenciados, garantindo conveniência e excelência no atendimento
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Main Stats Card */}
          <AnimatedSection animation="scale-in" className="lg:row-span-3">
            <div className="h-full bg-gradient-to-br from-primary to-trust rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm font-semibold">Todo o Distrito Federal</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold leading-tight">
                    Cobertura completa em todas as regiões do DF
                  </h3>
                  
                  <p className="text-white/90 leading-relaxed">
                    Rápido, acessível e completo. Porque seu sorriso não pode esperar!
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-8">
                  <div className="space-y-2 col-span-2">
                    <div className="text-5xl font-bold">
                      <StatsCounter end={100} suffix="+" />
                    </div>
                    <p className="text-sm text-white/80">Dentistas credenciados</p>
                  </div>
                  <div className="space-y-2 col-span-2">
                    <div className="text-5xl font-bold">
                      <StatsCounter end={10000} suffix="+" />
                    </div>
                    <p className="text-sm text-white/80">Pacientes atendidos</p>
                  </div>
                  <div className="space-y-2 col-span-2">
                    <div className="text-5xl font-bold">
                      <StatsCounter end={98} suffix="%" />
                    </div>
                    <p className="text-sm text-white/80">Taxa de satisfação</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Benefits Cards */}
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <AnimatedSection 
                key={benefit.title}
                animation="fade-in-up"
                delay={index * 100}
              >
                <div className="h-full bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border border-border/50 hover:border-primary/50">
                  <div className="flex flex-col h-full">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/20 to-trust/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}

          {/* Technology Image Card */}
          <AnimatedSection animation="fade-in-left" className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <img
                src={dentalTechnology}
                alt="Tecnologia odontológica avançada utilizada pela Interdental"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">Equipamentos de última geração</h3>
                  <p className="text-white/90 text-lg">Precisão, conforto e segurança em cada procedimento</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
