import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlanHeroProps {
  title: string;
  subtitle: string;
  badge: string;
  price: string;
  backgroundImage: string;
  badgeVariant?: 'primary' | 'trust' | 'warm';
}

export const PlanHero = ({ 
  title, 
  subtitle, 
  badge, 
  price, 
  backgroundImage,
  badgeVariant = 'primary'
}: PlanHeroProps) => {
  const badgeColors = {
    primary: "bg-primary/90 text-white",
    trust: "bg-trust/90 text-white",
    warm: "bg-warm/90 text-white"
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center text-white space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 animate-fade-in-up" 
             style={{ animationDelay: '0ms' }}>
          <div className={cn("inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-xl", badgeColors[badgeVariant])}>
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-bold uppercase tracking-wider">{badge}</span>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-3xl font-light text-white/90 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Price */}
        <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl px-8 py-6 border border-white/20">
            <p className="text-sm text-white/70 mb-2">A partir de</p>
            <p className="text-5xl md:text-6xl font-bold mb-1">{price}</p>
            <p className="text-lg text-white/70">/mês por pessoa</p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" 
             style={{ animationDelay: '600ms' }}>
          <Link to="/contrate">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 h-14 text-lg">
              Contratar Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <a 
            href="https://wa.me/556133212221?text=Olá!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda%20para%20escolher%20o%20melhor%20plano%20para%20mim."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary px-8 h-14 text-lg">
              Falar com Consultor
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
