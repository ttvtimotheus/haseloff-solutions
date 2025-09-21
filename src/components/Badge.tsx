import { cn } from "@/lib/utils";

export default function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-full bg-black/5 px-2 py-1 text-xs font-medium text-black/80 shadow-sm", className)}>
      {children}
    </span>
  );
}
