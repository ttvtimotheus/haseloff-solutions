import { useTranslations } from "next-intl";
import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import LocaleToggle from "@/components/LocaleToggle";
import Logo from "@/components/Logo";

export default function Header() {
  const t = useTranslations("Nav");

  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <Logo width={160} height={40} />
          </Link>
          <nav aria-label="Primary" className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#projekte" className="hover:opacity-80 focus-ring">{t("projects")}</a>
            <a href="#leistungen" className="hover:opacity-80 focus-ring">{t("services")}</a>
            <a href="#philosophie" className="hover:opacity-80 focus-ring">{t("philosophy")}</a>
            <a href="#kontakt" className="hover:opacity-80 focus-ring">{t("contact")}</a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <LocaleToggle />
          <ButtonLink href="#kontakt" className="hidden sm:inline-flex" variant="primary" size="md">
            {t("cta")}
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
