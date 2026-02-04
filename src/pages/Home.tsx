import { HeroSection } from "@/components/home/HeroSection";
import { CommitmentSection } from "@/components/home/CommitmentSection";
import { PlansShowcase } from "@/components/home/PlansShowcase";
import { BenefitsGrid } from "@/components/home/BenefitsGrid";
import { MedicineSection } from "@/components/home/MedicineSection";
import { InvisalignSection } from "@/components/home/InvisalignSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import WhatsAppButton from "@/components/WhatsAppButton";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CommitmentSection />
      <PlansShowcase />
      <BenefitsGrid />
      <MedicineSection />
      <InvisalignSection />
      <FAQSection />
      <FinalCTA />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
