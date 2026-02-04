import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "556133212221";
  const message = encodeURIComponent("Olá! Venho do site da Interdental e gostaria de ajuda!");
  
  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 group"
      aria-label="Iniciar conversa no WhatsApp com a Interdental - (61) 3321-2221"
    >
      <MessageCircle className="h-8 w-8" aria-hidden="true" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale conosco no WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
