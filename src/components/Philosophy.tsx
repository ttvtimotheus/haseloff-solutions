import Section from "@/components/Section";
import { useTranslations } from "next-intl";

export default function Philosophy() {
  const t = useTranslations("Philosophy");

  const pillars = [
    { key: "clarity", color: "from-primary-600/15", ring: "ring-primary-600/20" },
    { key: "quality", color: "from-secondary-500/15", ring: "ring-secondary-500/20" },
    { key: "responsibility", color: "from-accent-400/20", ring: "ring-accent-400/30" },
  ] as const;

  return (
    <Section id="philosophie" ariaLabelledby="philosophy-title">
      <h2 id="philosophy-title" className="text-[length:var(--text-h2)] font-extrabold text-black/90">
        {t("title")}
      </h2>
      <p className="mt-4 max-w-prose text-black/75">{t("text")}</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {pillars.map((p) => (
          <div
            key={p.key}
            className={`rounded-2xl bg-white p-6 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.15)] ring-1 ${p.ring}`}
          >
            <div className={`h-2 w-10 rounded-full bg-gradient-to-r ${p.color} to-transparent`} />
            <h3 className="mt-3 text-lg font-bold">{t(p.key)}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
}
