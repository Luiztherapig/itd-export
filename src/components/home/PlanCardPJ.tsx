import { Shield, Check, Users, Building2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { planPJ } from "@/data/plans";
import { Link } from "react-router-dom";

const PlanCardPJ = () => {
  const handleContactEmail = () => {
    window.location.href = "mailto:comercial@interdentaldf.com.br?subject=Cotação Plano Empresarial - Acima de 30 vidas";
  };

  return (
    <Card className="relative overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-trust p-6 text-white text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Shield className="w-6 h-6" />
          <span className="text-sm font-medium uppercase tracking-wider opacity-90">
            {planPJ.highlight}
          </span>
        </div>
        <h3 className="text-2xl font-bold">{planPJ.name}</h3>
        <p className="text-white/80 text-sm">{planPJ.subtitle}</p>
      </div>

      <CardContent className="p-6 space-y-6">
        {/* Price */}
        <div className="text-center">
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-4xl font-bold text-primary">{planPJ.price}</span>
          </div>
          <p className="text-muted-foreground text-sm">/mês por vida</p>
        </div>

        {/* Life Options Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* 2-30 vidas */}
          <div className="border-2 border-primary/20 rounded-xl p-4 hover:border-primary/50 transition-all hover:shadow-md bg-gradient-to-br from-background to-primary/5">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-full bg-primary/10">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <span className="font-semibold text-foreground">De 2 a 30 vidas</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Ideal para pequenas e médias empresas
            </p>
            <Link to="/contrate" className="block">
              <Button className="w-full bg-primary hover:bg-primary/90">
                Contratar Agora
              </Button>
            </Link>
          </div>

          {/* Acima de 30 vidas */}
          <div className="border-2 border-trust/20 rounded-xl p-4 hover:border-trust/50 transition-all hover:shadow-md bg-gradient-to-br from-background to-trust/5">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-full bg-trust/10">
                <Building2 className="w-5 h-5 text-trust" />
              </div>
              <span className="font-semibold text-foreground">Acima de 30 vidas</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Planos personalizados para grandes empresas
            </p>
            <Button 
              onClick={handleContactEmail}
              variant="outline" 
              className="w-full border-trust text-trust hover:bg-trust hover:text-white"
            >
              <Mail className="w-4 h-4 mr-2" />
              Solicitar Cotação
            </Button>
          </div>
        </div>

        {/* Features List */}
        <div className="pt-4 border-t border-border">
          <p className="text-sm font-medium text-foreground mb-3">Coberturas incluídas:</p>
          <ul className="grid grid-cols-2 gap-2">
            {planPJ.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Registration & Link */}
        <div className="text-center pt-4 border-t border-border space-y-3">
          <Link 
            to="/planos/empresarial" 
            className="text-sm text-primary hover:underline font-medium"
          >
            Ver detalhes completos do plano →
          </Link>
          <p className="text-xs text-muted-foreground">
            Registro ANS nº {planPJ.registrationNumber}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlanCardPJ;
