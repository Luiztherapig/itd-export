import { PlanHero } from "@/components/plans/PlanHero";
import { TargetAudienceSection } from "@/components/plans/TargetAudienceSection";
import { BenefitsSection } from "@/components/plans/BenefitsSection";
import { DifferentialsSection } from "@/components/plans/DifferentialsSection";
import { PlansFAQSection } from "@/components/plans/PlansFAQSection";
import { Heart, Sparkles, Star, Calendar, MapPin, Award, Gift, HeadphonesIcon, Smile } from "lucide-react";
import dentalTechnology from "@/assets/dental-technology.png";

const PlanVip = () => {
  const personas = [
    {
      icon: Sparkles,
      title: "Autoestima em alta",
      description: "Clareamento dentário incluso para um sorriso mais branco"
    },
    {
      icon: Heart,
      title: "Cobertura total",
      description: "Todos os procedimentos essenciais + estética avançada"
    },
    {
      icon: Star,
      title: "Experiência premium",
      description: "Atendimento VIP com profissionais de excelência"
    }
  ];

  const features = [
    "Consultas",
    "Prevenção",
    "Urgência",
    "Radiologia",
    "Odontopediatria",
    "Restauração em Resina",
    "Periodontia",
    "Extração (Cirurgia)",
    "Canal (Endodontia)",
    "Prótese (Coroa e Bloco)",
    "Ortodontia",
    "Aparelhos, Exames e Revisões",
    "Clareamento Dentário"
  ];

  const differentials = [
    {
      icon: Smile,
      title: "Clareamento dentário incluso",
      description: "Tratamento estético profissional para um sorriso radiante"
    },
    {
      icon: Award,
      title: "Equipe especializada",
      description: "Profissionais de alta qualidade na rede credenciada Interdental"
    },
    {
      icon: Calendar,
      title: "Cobertura completa",
      description: "Prevenção, urgência e estética em um único plano"
    },
    {
      icon: Gift,
      title: "Condições especiais",
      description: "Benefícios exclusivos com parceiros selecionados"
    },
    {
      icon: Sparkles,
      title: "Procedimentos estéticos e funcionais",
      description: "Saúde bucal e beleza do sorriso no mesmo plano"
    },
    {
      icon: HeadphonesIcon,
      title: "Atendimento premium",
      description: "Empatia, rapidez e acolhimento em cada etapa"
    }
  ];

  return (
    <div className="w-full">
      <PlanHero
        title="Plano VIP"
        subtitle="Sorriso radiante, cuidado completo"
        badge="Clareamento Dentário"
        price="R$ 191,50"
        backgroundImage={dentalTechnology}
        badgeVariant="warm"
      />

      <TargetAudienceSection
        title="Saúde bucal + Estética em um só plano"
        description="O Plano VIP é ideal para quem busca uma experiência odontológica completa, unindo saúde bucal e estética. Além de contar com ampla cobertura de serviços essenciais, o plano oferece o diferencial do clareamento dentário, garantindo um sorriso saudável e mais branco."
        personas={personas}
      />

      <BenefitsSection
        title="O que você ganha"
        subtitle="Cobertura premium com estética incluída"
        features={features}
        highlightText="✨ Único plano com clareamento dentário incluso"
        price="R$ 191,50"
        registrationNumber="403.098/98-2"
      />

      <DifferentialsSection differentials={differentials} />

      <PlansFAQSection 
        title="Dúvidas sobre o Plano VIP"
        subtitle="Tudo que você precisa saber sobre nosso plano mais completo"
      />
    </div>
  );
};

export default PlanVip;
