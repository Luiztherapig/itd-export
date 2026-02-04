import { Shield, Eye, Heart, Award, Users, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/layout/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";

const About = () => {
  const timeline = [
    { year: "1992", event: "Fundação da Interdental" },
    { year: "2005", event: "Expansão da rede credenciada" },
    { year: "2015", event: "Certificação ANS" },
    { year: "2024", event: "Mais de 10.000 beneficiários atendidos" }
  ];

  const differentials = [
    { icon: Clock, title: "Sem carência", description: "Use seu plano imediatamente" },
    { icon: Heart, title: "Atendimento humanizado", description: "Cuidado e atenção em primeiro lugar" },
    { icon: Shield, title: "Foco em prevenção", description: "Programas preventivos eficazes" },
    { icon: Users, title: "Tecnologia e inovação", description: "Carteirinha digital e atendimento online" }
  ];

  return (
    <div className="w-full">
      <PageHero
        title="Sobre a Interdental"
        subtitle="32 anos cuidando do sorriso dos brasilienses"
      />

      {/* História */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nossa História</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
                {timeline.map((item, index) => (
                  <div key={index} className="relative mb-8">
                    <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                      <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                        <div className="bg-background border border-border p-6 rounded-lg shadow-lg">
                          <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                          <p className="text-muted-foreground">{item.event}</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Missão, Visão e Valores */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Missão, Visão e Valores</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-8 rounded-lg shadow-lg text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Missão</h3>
                <p className="text-muted-foreground">
                  Proporcionar saúde bucal de qualidade com atendimento humanizado, 
                  acessível e preventivo para todas as famílias do Distrito Federal.
                </p>
              </div>
              <div className="bg-background p-8 rounded-lg shadow-lg text-center">
                <Eye className="h-12 w-12 text-trust mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Visão</h3>
                <p className="text-muted-foreground">
                  Ser referência em odontologia preventiva e humanizada, 
                  reconhecida pela excelência no atendimento e inovação.
                </p>
              </div>
              <div className="bg-background p-8 rounded-lg shadow-lg text-center">
                <Heart className="h-12 w-12 text-warm mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Valores</h3>
                <p className="text-muted-foreground">
                  Humanização, ética, transparência, excelência no atendimento, 
                  compromisso com a prevenção e respeito ao paciente.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Diferenciais */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nossos Diferenciais</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {differentials.map((item, index) => (
                <div key={index} className="text-center p-6">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Compromisso com Prevenção */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Compromisso com a Prevenção</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Acreditamos que a melhor forma de cuidar da saúde bucal é através da prevenção. 
              Por isso, todos os nossos planos incluem consultas e procedimentos preventivos sem carência.
            </p>
            <div className="bg-primary/10 p-8 rounded-lg">
              <p className="text-4xl font-bold text-primary mb-2">85%</p>
              <p className="text-muted-foreground">
                dos nossos beneficiários não precisaram de tratamentos complexos 
                graças aos nossos programas preventivos
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Certificações */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Certificações e Reconhecimentos</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="text-center">
                <Award className="h-16 w-16 text-primary mx-auto mb-2" />
                <p className="font-bold">Registro ANS</p>
                <p className="text-sm text-muted-foreground">nº 314757</p>
              </div>
              <div className="text-center">
                <Shield className="h-16 w-16 text-trust mx-auto mb-2" />
                <p className="font-bold">LGPD</p>
                <p className="text-sm text-muted-foreground">Compliance total</p>
              </div>
              <div className="text-center">
                <Star className="h-16 w-16 text-warm mx-auto mb-2" />
                <p className="font-bold">32 Anos</p>
                <p className="text-sm text-muted-foreground">De tradição</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Credenciamento */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Faça Parte da Nossa Equipe de Credenciados
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Junte-se a mais de 150 profissionais que confiam na Interdental para expandir seus negócios
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/credenciamento">
                  Quero me Credenciar
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/rede-credenciada">
                  Ver Rede Credenciada
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default About;
