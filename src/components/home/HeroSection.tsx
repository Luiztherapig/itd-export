import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Star } from "lucide-react";
import { StatsCounter } from "@/components/ui/stats-counter";
import heroMain from "@/assets/hero-main.webp";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-trust/5">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-trust/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold animate-fade-in">
              <Award className="h-4 w-4" />
              32 anos cuidando do seu sorriso
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in-up">
              Especialistas em{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-trust">
                todo o Distrito Federal
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in-up delay-200">
              Uma rede credenciada de especialistas que cuida do seu sorriso por todo o DF
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 py-6 animate-fade-in-up delay-300">
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-primary">
                  <StatsCounter end={10000} suffix="+" />
                </div>
                <p className="text-sm text-muted-foreground mt-1">Pacientes atendidos</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-trust">
                  <StatsCounter end={100} suffix="+" />
                </div>
                <p className="text-sm text-muted-foreground mt-1">Dentistas credenciados</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 justify-center lg:justify-start animate-fade-in-up delay-400">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-warm text-warm" />
                ))}
              </div>
              <span className="text-sm font-semibold">4.9/5</span>
              <span className="text-sm text-muted-foreground">(28 avaliações)</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-500">
              <Link to="/planos" className="flex-1 sm:flex-initial">
                <Button size="lg" className="w-full sm:w-auto text-base h-14 px-8 bg-gradient-to-r from-primary to-trust hover:shadow-lg hover:scale-105 transition-all">
                  Conheça nossos planos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="https://www.oazez.com.br/intranet/index2.php?pg=GEN/GENF0001.php&modelo=RedeOdontoSaude&cliente=interdental&flag=1" className="flex-1 sm:flex-initial">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-14 px-8 hover:scale-105 transition-all">
                  Ver Rede Credenciada
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
            <div className="relative animate-fade-in-up delay-300 h-auto md:h-[75%]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-trust/20 rounded-3xl blur-2xl" />
            <img
              src={heroMain}
              alt="Dentista da Interdental sorrindo em ambiente profissional moderno"
              className="relative rounded-3xl shadow-2xl w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="eager"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 bg-gradient-to-br from-trust to-primary rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold">ANS Certificado</div>
                  <div className="text-xs text-muted-foreground">Nº 314757</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
