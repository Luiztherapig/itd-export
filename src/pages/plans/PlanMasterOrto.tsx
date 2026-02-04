import { PlanHero } from "@/components/plans/PlanHero";
import { TargetAudienceSection } from "@/components/plans/TargetAudienceSection";
import { BenefitsSection } from "@/components/plans/BenefitsSection";
import { DifferentialsSection } from "@/components/plans/DifferentialsSection";
import { PlansFAQSection } from "@/components/plans/PlansFAQSection";
import { Users, Smile, TrendingUp, Sparkles, MapPin, Calendar, Award, Gift, HeadphonesIcon } from "lucide-react";
import smileResult from "@/assets/smiling-patient.png";

const PlanMasterOrto = () => {
  const personas = [
    {
      icon: Users,
      title: "Todas as idades",
      description: "Tratamento ortodôntico para crianças, adolescentes e adultos"
    },
    {
      icon: Smile,
      title: "Correção dentária",
      description: "Aparelhos fixos e móveis com acompanhamento completo"
    },
    {
      icon: TrendingUp,
      title: "Orçamento controlado",
      description: "Preço justo para tratamento ortodôntico de qualidade"
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
    "Aparelhos, Exames e Revisões"
  ];

  const differentials = [
    {
      icon: Sparkles,
      title: "Manutenções periódicas incluídas",
      description: "Ajustes mensais de aparelho sem custo adicional"
    },
    {
      icon: MapPin,
      title: "Rede credenciada especializada",
      description: "Ortodontistas qualificados em toda a rede Interdental"
    },
    {
      icon: Calendar,
      title: "Documentação ortodôntica completa",
      description: "Todos os exames necessários para planejamento do tratamento"
    },
    {
      icon: Award,
      title: "Plano acessível",
      description: "Ortodontia completa com mensalidade que cabe no seu orçamento"
    },
    {
      icon: Gift,
      title: "Condições especiais",
      description: "Descontos em farmácias e produtos odontológicos parceiros"
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte dedicado",
      description: "Atendimento com empatia, rapidez e acolhimento"
    }
  ];

  return (
    <div className="w-full">
      <PlanHero
        title="Plano Master Orto"
        subtitle="Soluções avançadas & acessíveis"
        badge="Aparelho Ortodôntico"
        price="R$ 182,50"
        backgroundImage={smileResult}
        badgeVariant="trust"
      />

      <TargetAudienceSection
        title="Para quem busca um sorriso alinhado"
        description="O Plano Master Orto foi pensado para quem busca soluções avançadas e acessíveis para tratamentos de correção dentária. Ideal para pacientes que precisam ajustar a posição dos dentes, oferecendo cobertura completa para cuidados ortodônticos com resultados eficientes e seguros."
        personas={personas}
      />

      <BenefitsSection
        title="O que você ganha"
        subtitle="Cobertura ortodôntica completa"
        features={features}
        highlightText="✨ Inclui aparelhos, manutenções e documentação ortodôntica"
        price="R$ 182,50"
        registrationNumber="403.097/98-4"
      />

      <DifferentialsSection differentials={differentials} />

      <PlansFAQSection 
        title="Dúvidas sobre o Plano Master Orto"
        subtitle="Informações importantes sobre nosso plano com ortodontia incluída"
      />
    </div>
  );
};

export default PlanMasterOrto;
