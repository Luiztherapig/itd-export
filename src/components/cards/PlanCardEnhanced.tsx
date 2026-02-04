import { Check, Sparkles, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface PlanCardEnhancedProps {
  name: string;
  description: string;
  price: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  variant?: 'standard' | 'master' | 'vip';
  hideButton?: boolean;
}

const variantConfig = {
  standard: {
    icon: Shield,
    gradient: 'from-primary/10 to-primary/5',
    iconColor: 'text-primary',
    badgeColor: 'bg-primary text-primary-foreground'
  },
  master: {
    icon: Zap,
    gradient: 'from-trust/10 to-trust/5',
    iconColor: 'text-trust',
    badgeColor: 'bg-trust text-white'
  },
  vip: {
    icon: Sparkles,
    gradient: 'from-warm/10 to-warm/5',
    iconColor: 'text-warm',
    badgeColor: 'bg-warm text-white'
  }
};

const PlanCardEnhanced = ({ 
  name, 
  description, 
  price, 
  features, 
  highlighted = false,
  badge,
  variant = 'standard',
  hideButton = false
}: PlanCardEnhancedProps) => {
  const config = variantConfig[variant];
  const Icon = config.icon;

  return (
    <div className="relative">
      {highlighted && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gradient-to-r from-trust to-warm text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg z-20">
          MAIS POPULAR
        </div>
      )}
      <Card className={cn(
        "relative group transition-all duration-500 hover:shadow-2xl h-full flex flex-col overflow-hidden",
        highlighted && "border-2 border-trust shadow-2xl ring-4 ring-trust/20 scale-105 z-10 bg-gradient-to-br from-trust/5 to-transparent"
      )}>
      
      <CardHeader className={cn("bg-gradient-to-br", config.gradient)}>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-3xl mb-2 flex items-center gap-2">
              <Icon className={cn("h-8 w-8", config.iconColor)} />
              {name}
            </CardTitle>
            <CardDescription className="text-base">{description}</CardDescription>
          </div>
        </div>
        
        {badge && (
          <div className={cn("inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg", config.badgeColor)}>
            <Sparkles className="h-3.5 w-3.5" />
            {badge}
          </div>
        )}
      </CardHeader>

      <CardContent className="space-y-6 pt-6">
        <div className="text-center py-8 bg-gradient-to-br from-muted/50 to-muted/20 rounded-2xl border border-border/50">
          <div className={cn("text-5xl font-bold leading-none mb-2", config.iconColor)}>
            {price}
          </div>
          <span className="text-sm text-muted-foreground font-semibold tracking-wide">/mês</span>
        </div>

        <ul className="space-y-3.5">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 group/item">
              <div className="shrink-0 mt-0.5">
                <Check className="h-5 w-5 text-trust transition-all duration-300 group-hover/item:scale-125" />
              </div>
              <span className="text-sm leading-relaxed font-medium text-foreground/90">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>

      {!hideButton && (
        <CardFooter className="pt-0">
          <Link to="/contrate" className="w-full">
            <Button 
              className={cn(
                "w-full text-base h-12 transition-all duration-300",
                highlighted && "bg-gradient-to-r from-trust to-warm hover:shadow-lg hover:scale-105"
              )}
              variant={highlighted ? "default" : "outline"}
            >
              Contratar Agora
            </Button>
          </Link>
        </CardFooter>
      )}
    </Card>
    </div>
  );
};

export default PlanCardEnhanced;
