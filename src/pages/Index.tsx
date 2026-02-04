import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { NavigationSidebar } from "@/components/NavigationSidebar";
import Hero from "@/components/Hero";
import SACSection from "@/components/SACSection";
import AccessibilitySection from "@/components/AccessibilitySection";
import OmbudsmanSection from "@/components/OmbudsmanSection";
import CancellationSection from "@/components/CancellationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <NavigationSidebar />
        
        <main className="flex-1">
          <div className="sticky top-0 z-50 h-14 flex items-center px-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
            <SidebarTrigger />
          </div>
          
          <Hero />
          <SACSection />
          <AccessibilitySection />
          <OmbudsmanSection />
          <CancellationSection />
          <Footer />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
