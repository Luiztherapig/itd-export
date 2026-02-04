import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import invisalignLogo from "@/assets/partners/invisalign-logo.avif";
import invisalignTreatment from "@/assets/invisalign-treatment.webp";

const benefits = [
  "Condições de pagamento exclusivas",
  "Acompanhamento com especialistas certificados",
  "Tecnologia 3D para resultados precisos",
  "Conforto e discrição no tratamento"
];

export const InvisalignSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-trust rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Content */}
          <AnimatedSection animation="fade-in-right" className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-warm/20 text-warm px-4 py-2 rounded-full">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-semibold">Ainda mais motivos para ser Interdental</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                Conquiste seu{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-trust to-warm">
                  Invisalign
                </span>
              </h2>

              <p className="text-xl text-white/80 leading-relaxed">
                Com a <span className="font-bold text-white">Interdental</span>, você aproveita condições exclusivas e facilidades para iniciar seu tratamento Invisalign® com segurança e acompanhamento especializado.
              </p>
            </div>

            {/* Benefits list */}
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <AnimatedSection 
                  key={benefit}
                  animation="fade-in-left"
                  delay={index * 100}
                  className="flex items-start gap-3"
                >
                  <div className="h-6 w-6 rounded-full bg-gradient-to-br from-primary to-trust flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg text-white/90">{benefit}</span>
                </AnimatedSection>
              ))}
            </ul>

            {/* CTA */}
            <Link to="https://www.invisalign.com.br/">
              <Button 
                size="lg" 
                className="mt-8 bg-white text-primary hover:bg-white/90 text-base h-14 px-8 hover:scale-105 transition-all shadow-xl"
              >
                Saiba mais sobre Invisalign
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            {/* Invisalign logo */}
            <div className="pt-6 pb-4">
              <div className="text-sm text-white/60 mb-3 font-medium tracking-wide">Tratamento com</div>
              <img 
                src={invisalignLogo} 
                alt="Invisalign"
                className="h-10 w-auto object-contain"
              />
            </div>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection animation="fade-in-left" className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-trust/30 blur-2xl" />
              
              <div className="relative rounded-3xl overflow-hidden border-4 border-white/10">
                <img
                  src={invisalignTreatment}
                  alt="Tratamento Invisalign - pessoa colocando alinhador transparente"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Shimmer overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent animate-shimmer" />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-warm to-primary rounded-2xl shadow-2xl p-6 animate-float">
              <div className="text-center">
                <Sparkles className="h-8 w-8 text-white mx-auto mb-2" />
                <div className="text-sm font-semibold text-white">Sorriso dos Sonhos</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
