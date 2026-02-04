import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Calendar, Phone, MessageCircle, Instagram, Shield, Zap, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo-interdental.png";
const navigationItems = [{
  title: "Início",
  url: "/"
}, {
  title: "Sobre",
  url: "/sobre"
}];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Lidar com navegação direta para #faq
  useEffect(() => {
    if (window.location.hash === "#faq" && location.pathname === "/") {
      const timer = setTimeout(() => {
        const faqSection = document.getElementById("faq");
        if (faqSection) {
          faqSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }, 500); // Aguarda 500ms para o componente renderizar completamente

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);
  const isActive = (path: string) => location.pathname === path;
  const handleFAQClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      // Navegar para a home e depois rolar para o FAQ
      window.location.href = "/#faq";
    } else {
      // Já estamos na home, rolar para o FAQ
      const scrollToFAQ = () => {
        const faqSection = document.getElementById("faq");
        if (faqSection) {
          faqSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        } else {
          // Se não encontrou, tentar novamente após um pequeno delay
          setTimeout(scrollToFAQ, 100);
        }
      };
      scrollToFAQ();
    }
  };
  return <header className="sticky top-0 z-50 w-full border-b border-border bg-white">
      {/* Top Bar */}
      <div className="border-b border-border/50 bg-background">
        <div className="container mx-auto flex h-10 items-center justify-between px-4">
          {/* Social Icons - Left */}
          <div className="flex items-center gap-2">
            <a href="tel:+556133212221" className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors" aria-label="Telefone">
              <Phone className="h-3.5 w-3.5" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5561999758668&text=Ol%C3%A1!%20Venho%20do%20site%20da%20Interdental%20e%20gostaria%20de%20ajuda!" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors" aria-label="WhatsApp">
              <MessageCircle className="h-3.5 w-3.5" />
            </a>
            <a href="https://www.instagram.com/interdentaldf/" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors" aria-label="Instagram">
              <Instagram className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Actions - Right */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/credenciamento" className="text-xs font-medium text-foreground/80 hover:text-primary transition-colors flex items-center gap-1">
              ÁREA DO CREDENCIADO →
            </Link>
            
            <Link to="/beneficiario" className="text-xs font-medium text-foreground/80 hover:text-primary transition-colors flex items-center gap-1">
              ÁREA DO BENEFICIÁRIO →
            </Link>
            
            <Link to="/contrate">
              <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-7 text-xs">
                <Calendar className="h-3 w-3 mr-1" />
                AGENDAR ONLINE
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Interdental" className="h-24" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Início */}
          <Link to="/" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/") ? "text-primary" : "text-foreground/80"}`}>
            Início
          </Link>
          
          {/* Planos Dropdown */}
          <div className="relative group">
            <button className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors flex items-center gap-1">
              Planos
              <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 max-w-[calc(100vw-2rem)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out z-50">
              <div className="bg-popover border border-border rounded-md shadow-lg p-3 space-y-2">
                <Link to="/planos/standard" className="flex items-center gap-3 p-3 rounded-md hover:bg-accent transition-colors group/item">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover/item:bg-primary/20 transition-colors flex-shrink-0">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium leading-none mb-1">
                      Plano Standard
                    </div>
                    <p className="text-xs text-muted-foreground truncate">
                      A partir de R$ 57,20/mês
                    </p>
                  </div>
                </Link>
                
                <Link to="/planos/master-orto" className="flex items-center gap-3 p-3 rounded-md hover:bg-accent transition-colors group/item">
                  <div className="h-8 w-8 rounded-lg bg-trust/10 flex items-center justify-center group-hover/item:bg-trust/20 transition-colors flex-shrink-0">
                    <Zap className="h-4 w-4 text-trust" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium leading-none mb-1">
                      Plano Master Orto
                    </div>
                    <p className="text-xs text-muted-foreground truncate">
                      A partir de R$ 182,50/mês
                    </p>
                  </div>
                </Link>
                
                <Link to="/planos/vip" className="flex items-center gap-3 p-3 rounded-md hover:bg-accent transition-colors group/item">
                  <div className="h-8 w-8 rounded-lg bg-warm/10 flex items-center justify-center group-hover/item:bg-warm/20 transition-colors flex-shrink-0">
                    <Sparkles className="h-4 w-4 text-warm" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium leading-none mb-1">
                      Plano VIP
                    </div>
                    <p className="text-xs text-muted-foreground truncate">
                      A partir de R$ 119,50/mês
                    </p>
                  </div>
                </Link>
                
                <div className="border-t pt-2 mt-2">
                  <Link to="/planos" className="flex items-center justify-between p-3 rounded-md hover:bg-accent transition-colors group/item">
                    <span className="text-sm font-medium">Ver todos os planos</span>
                    <ArrowRight className="h-4 w-4 group-hover/item:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Sobre */}
          <Link to="/sobre" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/sobre") ? "text-primary" : "text-foreground/80"}`}>
            Sobre
          </Link>

          {/* FAQ Link */}
          <button onClick={handleFAQClick} className="text-sm font-medium transition-colors hover:text-primary text-foreground/80">
            FAQ
          </button>

          {/* Contato */}
          <Link to="/atendimento" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/atendimento") ? "text-primary" : "text-foreground/80"}`}>
            Contato
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-4 mt-8">
              <Link to="/" onClick={() => setIsOpen(false)}>
                <img src={logo} alt="Interdental" className="h-12 mb-6" />
              </Link>
              
              {/* Início */}
              <Link to="/" onClick={() => setIsOpen(false)} className={`text-lg font-medium transition-colors hover:text-primary ${isActive("/") ? "text-primary" : "text-foreground"}`}>
                Início
              </Link>

              {/* Planos - Individual Links */}
              <div className="space-y-3 border-l-2 border-primary/20 pl-4">
                <div className="text-sm font-semibold text-primary/80 uppercase tracking-wider">
                  Planos
                </div>
                
                <Link to="/planos/standard" onClick={() => setIsOpen(false)} className={`flex items-center gap-3 text-base font-medium transition-colors hover:text-primary ${isActive("/planos/standard") ? "text-primary" : "text-foreground"}`}>
                  <Shield className="h-4 w-4 text-primary" />
                  Plano Standard
                </Link>

                <Link to="/planos/master-orto" onClick={() => setIsOpen(false)} className={`flex items-center gap-3 text-base font-medium transition-colors hover:text-primary ${isActive("/planos/master-orto") ? "text-primary" : "text-foreground"}`}>
                  <Zap className="h-4 w-4 text-trust" />
                  Plano Master Orto
                </Link>

                <Link to="/planos/vip" onClick={() => setIsOpen(false)} className={`flex items-center gap-3 text-base font-medium transition-colors hover:text-primary ${isActive("/planos/vip") ? "text-primary" : "text-foreground"}`}>
                  <Sparkles className="h-4 w-4 text-warm" />
                  Plano VIP
                </Link>

                <Link to="/planos" onClick={() => setIsOpen(false)} className={`flex items-center gap-3 text-base font-medium transition-colors hover:text-primary ${isActive("/planos") ? "text-primary" : "text-foreground/80"}`}>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  Comparar Planos
                </Link>
              </div>

              {/* Sobre */}
              <Link to="/sobre" onClick={() => setIsOpen(false)} className={`text-lg font-medium transition-colors hover:text-primary ${isActive("/sobre") ? "text-primary" : "text-foreground"}`}>
                Sobre
              </Link>

              {/* FAQ */}
              <button onClick={e => {
              handleFAQClick(e);
              setIsOpen(false);
            }} className="text-lg font-medium text-foreground hover:text-primary text-left">
                FAQ
              </button>

              {/* Contato */}
              <Link to="/atendimento" onClick={() => setIsOpen(false)} className={`text-lg font-medium transition-colors hover:text-primary ${isActive("/atendimento") ? "text-primary" : "text-foreground"}`}>
                Contato
              </Link>

              {/* Credenciamento */}
              <Link to="/credenciamento" onClick={() => setIsOpen(false)} className={`text-lg font-medium transition-colors hover:text-primary ${isActive("/credenciamento") ? "text-primary" : "text-foreground"}`}>
                Credenciamento
              </Link>
              
              <Link to="/beneficiario" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full mt-2">
                  SOU CLIENTE
                </Button>
              </Link>
              <Link to="/contrate" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary/90 mt-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  Agendar Online
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>;
};
export default Navbar;