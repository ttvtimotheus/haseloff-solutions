import { useTranslations } from "next-intl";
import { ButtonLink } from "@/components/Button";
import NoiseLayer from "@/components/NoiseLayer";
import HeroBackground from "@/components/HeroBackground";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      className="relative overflow-hidden bg-hero min-h-[85vh] flex items-center"
      aria-labelledby="page-title"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/8 via-secondary-400/6 to-accent-400/8" />
      {/* Enhanced subtle particles */}
      <div aria-hidden className="absolute inset-0">
        <span className="particle left-[8%] top-[15%] h-1.5 w-1.5 text-primary-500/60" style={{ ['--dur' as any]: '8s' }} />
        <span className="particle left-[15%] top-[35%] h-2 w-2 text-secondary-400/50" style={{ ['--dur' as any]: '10s' }} />
        <span className="particle left-[25%] top-[70%] h-1 w-1 text-accent-400/70" style={{ ['--dur' as any]: '12s' }} />
        <span className="particle left-[5%] top-[55%] h-1.5 w-1.5 text-primary-400/40" style={{ ['--dur' as any]: '9s' }} />
      </div>
      <HeroBackground />
      <NoiseLayer />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-24 sm:py-32 w-full">
        <div className="max-w-5xl">
          <h1 id="page-title" className="font-extrabold leading-[0.85] text-[clamp(2.5rem,8vw,6rem)] text-black/90 text-balance">
            {t("claim")}
          </h1>
          <p className="mt-12 text-black/75 text-[clamp(1.125rem,2.5vw,1.5rem)] leading-relaxed max-w-2xl">
            {t("subline")}
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <ButtonLink href="#kontakt" variant="primary" size="xl">
              {t("cta")}
            </ButtonLink>
            <ButtonLink href="#projekte" variant="ghost" size="lg">
              {"→ Projekte"}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
