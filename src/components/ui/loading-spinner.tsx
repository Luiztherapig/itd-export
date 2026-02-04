import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  text?: string;
}

const sizeClasses = {
  sm: "h-4 w-4",
  md: "h-8 w-8",
  lg: "h-12 w-12",
};

export const LoadingSpinner = ({ 
  className, 
  size = "lg",
  text = "Carregando..."
}: LoadingSpinnerProps) => {
  return (
    <div className={cn("flex flex-col items-center justify-center min-h-[50vh] gap-4", className)}>
      <Loader2 className={cn("animate-spin text-primary", sizeClasses[size])} />
      {text && (
        <p className="text-sm text-muted-foreground animate-pulse">{text}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;
