import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { List } from "lucide-react";

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
  className?: string;
}

const TableOfContents = ({ items, className }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className={cn("space-y-1", className)}>
      <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-foreground">
        <List className="h-4 w-4" />
        <span>Índice</span>
      </div>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleClick(item.id)}
              className={cn(
                "block w-full text-left text-sm py-1.5 px-3 rounded-md transition-colors",
                "hover:bg-muted hover:text-foreground",
                item.level > 1 && "pl-6",
                activeId === item.id
                  ? "bg-primary/10 text-primary font-medium border-l-2 border-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
