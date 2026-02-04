import { PlanHero } from "@/components/plans/PlanHero";
import { TargetAudienceSection } from "@/components/plans/TargetAudienceSection";
import { BenefitsSection } from "@/components/plans/BenefitsSection";
import { DifferentialsSection } from "@/components/plans/DifferentialsSection";
import { PlansFAQSection } from "@/components/plans/PlansFAQSection";
import { Users, Heart, ShieldCheck, Sparkles, MapPin, Calendar, Award, Gift, HeadphonesIcon } from "lucide-react";
import heroMain from "@/assets/hero-main.webp";

const PlanStandard = () => {
  const personas = [
    {
      icon: Users,
      title: "Famílias completas",
      description: "Cobertura essencial para todos os membros da família com preço acessível"
    },
    {
      icon: Heart,
      title: "Primeiro plano",
      description: "Perfeito para quem busca seu primeiro plano odontológico sem complicações"
    },
    {
      icon: ShieldCheck,
      title: "Preventivo e curativo",
      description: "Mais de 200 procedimentos cobertos pelo Rol ANS"
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
    "Prótese (Coroa e Bloco)"
  ];

  const differentials = [
    {
      icon: Sparkles,
      title: "Atendimento moderno e eficaz",
      description: "Foco no seu conforto com tecnologia de ponta e equipe qualificada"
    },
    {
      icon: MapPin,
      title: "Clínicas estratégicas",
      description: "Rede credenciada em localizações convenientes no DF"
    },
    {
      icon: Calendar,
      title: "Agendamento simplificado",
      description: "Marque suas consultas de forma rápida pelo WhatsApp ou telefone"
    },
    {
      icon: Award,
      title: "Investimento acessível",
      description: "Plano completo que cabe no seu bolso sem abrir mão da qualidade"
    },
    {
      icon: Gift,
      title: "Benefícios extras",
      description: "Descontos em farmácias parceiras (Drogasil e Droga Raia)"
    },
    {
      icon: HeadphonesIcon,
      title: "Atendimento humanizado",
      description: "Empatia, rapidez e acolhimento em todos os contatos"
    }
  ];

  return (
    <div className="w-full">
      <PlanHero
        title="Plano Standard"
        subtitle="Perfeito para você, sem pesar no bolso"
        badge="ROL ANS"
        price="R$ 57,20"
        backgroundImage={heroMain}
        badgeVariant="primary"
      />

      <TargetAudienceSection
        title="Ideal para famílias que valorizam saúde bucal"
        description="O Plano Standard é a escolha perfeita para quem busca um cuidado odontológico completo e acessível. Com uma ampla cobertura baseada no Rol da ANS, oferecemos mais de 200 procedimentos que garantem a saúde e o bem-estar bucal de toda a família."
        personas={personas}
      />

      <BenefitsSection
        title="O que você ganha"
        subtitle="Cobertura completa para cuidar do seu sorriso"
        features={features}
        highlightText="✨ Baseado no Rol ANS - mais de 200 procedimentos"
        price="R$ 57,20"
        registrationNumber="458.634/08-4"
      />

      <DifferentialsSection differentials={differentials} />

      <PlansFAQSection 
        title="Dúvidas sobre o Plano Standard"
        subtitle="Respostas para as principais questões sobre nosso plano mais acessível"
      />
    </div>
  );
};

export default PlanStandard;
