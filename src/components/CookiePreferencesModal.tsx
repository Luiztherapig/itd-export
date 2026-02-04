import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Shield, BarChart3, Megaphone } from "lucide-react";
import type { CookiePreferences } from "@/hooks/useCookieConsent";

interface CookiePreferencesModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (preferences: CookiePreferences) => void;
  currentPreferences?: CookiePreferences | null;
}

const CookiePreferencesModal = ({
  open,
  onOpenChange,
  onSave,
  currentPreferences,
}: CookiePreferencesModalProps) => {
  const [analytics, setAnalytics] = useState(currentPreferences?.analytics ?? false);
  const [marketing, setMarketing] = useState(currentPreferences?.marketing ?? false);

  const handleSave = () => {
    onSave({
      essential: true,
      analytics,
      marketing,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Preferências de Cookies</DialogTitle>
          <DialogDescription>
            Escolha quais categorias de cookies você deseja permitir.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Essential - Always on */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div className="space-y-1">
                <Label className="font-medium">Essenciais</Label>
                <p className="text-sm text-muted-foreground">
                  Necessários para o funcionamento básico do site. Não podem ser desativados.
                </p>
              </div>
            </div>
            <Switch checked disabled className="data-[state=checked]:bg-primary" />
          </div>

          {/* Analytics */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <BarChart3 className="h-5 w-5 text-trust mt-0.5 shrink-0" />
              <div className="space-y-1">
                <Label htmlFor="analytics" className="font-medium cursor-pointer">
                  Analytics
                </Label>
                <p className="text-sm text-muted-foreground">
                  Coletam informações sobre como você utiliza o site para melhorarmos sua experiência.
                </p>
              </div>
            </div>
            <Switch
              id="analytics"
              checked={analytics}
              onCheckedChange={setAnalytics}
            />
          </div>

          {/* Marketing */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <Megaphone className="h-5 w-5 text-action mt-0.5 shrink-0" />
              <div className="space-y-1">
                <Label htmlFor="marketing" className="font-medium cursor-pointer">
                  Marketing
                </Label>
                <p className="text-sm text-muted-foreground">
                  Utilizados para exibir anúncios e comunicações personalizadas.
                </p>
              </div>
            </div>
            <Switch
              id="marketing"
              checked={marketing}
              onCheckedChange={setMarketing}
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button onClick={handleSave}>Salvar Preferências</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CookiePreferencesModal;
