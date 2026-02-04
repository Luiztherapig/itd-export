import Hero from "@/components/Hero";
import SACSection from "@/components/SACSection";
import AccessibilitySection from "@/components/AccessibilitySection";
import OmbudsmanSection from "@/components/OmbudsmanSection";
import CancellationSection from "@/components/CancellationSection";

const ContactSupport = () => {
  return (
    <div className="w-full">
      <Hero />
      <SACSection />
      <AccessibilitySection />
      <OmbudsmanSection />
      <CancellationSection />
    </div>
  );
};

export default ContactSupport;
