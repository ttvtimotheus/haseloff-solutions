import { useTranslations } from "next-intl";
import Section from "@/components/Section";
import { projects } from "@/lib/projects";
import Image from "next/image";
import Badge from "@/components/Badge";

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <Section id="projekte" ariaLabelledby="projects-title">
      <h2 id="projects-title" className="text-[length:var(--text-h1)] font-extrabold text-black/90">
        {t("title")}
      </h2>
      {projects.length === 0 ? (
        <p className="mt-4 text-black/70">{t("empty")}</p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.id} className="group rounded-2xl bg-white p-5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.15)] ring-1 ring-black/5 hover:shadow-lg transition-shadow">
              {p.image && (
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                  <Image src={p.image.src} alt={p.image.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                </div>
              )}
              <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-black/70">{p.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
              {p.stack && (
                <div className="mt-3 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {p.stack.map((s) => (
                    <Badge key={s} className="bg-secondary-500/10 text-secondary-600 ring-1 ring-secondary-500/20">
                      {s}
                    </Badge>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </Section>
  );
}
