import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Nav");
  const f = useTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-black/70">
            © {year} Haseloff Software Solutions Inhaber: Timo Haseloff. {f("rights")} <br className="sm:hidden" />
          </p>
          <nav aria-label="Footer" className="text-sm flex gap-4">
            <a href="#kontakt" className="hover:opacity-80 focus-ring">{t("contact")}</a>
            <Link href="/impressum" className="hover:opacity-80 focus-ring">{t("imprint")}</Link>
            <Link href="/datenschutz" className="hover:opacity-80 focus-ring">{t("privacy")}</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
