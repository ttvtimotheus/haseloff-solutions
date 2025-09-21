import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  id?: string;
  className?: string;
  ariaLabelledby?: string;
  children: ReactNode;
};

export default function Section({ id, className, ariaLabelledby, children }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn(
        "scroll-mt-24 py-16 sm:py-24",
        "px-4 sm:px-6 md:px-8",
        "max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </section>
  );
}
