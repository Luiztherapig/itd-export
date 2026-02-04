import { Phone, Ear, Megaphone, XCircle, Home } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import logoInterdental from "@/assets/logo-interdental.png";

const navigationItems = [
  { title: "Início", url: "#hero", icon: Home },
  { title: "SAC", url: "#sac", icon: Phone },
  { title: "Acessibilidade", url: "#acessibilidade", icon: Ear },
  { title: "Ouvidoria", url: "#ouvidoria", icon: Megaphone },
  { title: "Cancelamento", url: "#cancelamento", icon: XCircle },
];

export function NavigationSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const handleClick = (url: string) => {
    const element = document.querySelector(url);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Sidebar className="border-r border-border">
      <SidebarContent>
        <div className="p-4 flex items-center justify-center border-b border-border">
          <img 
            src={logoInterdental} 
            alt="Interdental" 
            className={cn(
              "object-contain transition-all",
              isCollapsed ? "h-8" : "h-12"
            )}
          />
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel className={isCollapsed ? "sr-only" : ""}>
            Navegação
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => handleClick(item.url)}
                    tooltip={isCollapsed ? item.title : undefined}
                  >
                    <item.icon className="h-4 w-4" />
                    {!isCollapsed && <span>{item.title}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
