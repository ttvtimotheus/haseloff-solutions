import Section from "@/components/Section";
import { useTranslations } from "next-intl";
import { Devices, AppWindow, BracketsCurly } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Services() {
  const t = useTranslations("Services");

  const items = [
    {
      icon: Devices,
      title: t("web"),
      body: t("webBody"),
      href: "#leistungen",
    },
    {
      icon: AppWindow,
      title: t("app"),
      body: t("appBody"),
      href: "#leistungen",
    },
    {
      icon: BracketsCurly,
      title: t("custom"),
      body: t("customBody"),
      href: "#leistungen",
    },
  ];

  return (
    <Section id="leistungen" ariaLabelledby="services-title">
      <h2 id="services-title" className="text-[length:var(--text-h2)] font-extrabold text-black/90">
        {t("title")}
      </h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.15)] ring-1 ring-black/5 hover:shadow-lg transition-shadow">
            <item.icon size={28} weight="duotone" className="text-primary-600" />
            <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
            <p className="mt-2 text-sm text-black/70">{item.body}</p>
            <Link href={item.href} className="mt-4 inline-block text-primary-700 hover:underline">
              {t("more")} →
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
