import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className, width = 120, height = 30 }: LogoProps) {
  return (
    <Image
      src="/logo-transparent.svg"
      alt="Haseloff Software Solutions"
      width={width}
      height={height}
      className={cn("h-auto", className)}
      priority
    />
  );
}
