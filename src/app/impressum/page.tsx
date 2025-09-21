import Section from "@/components/Section";

export const metadata = {
  title: "Impressum | Haseloff Software Solutions",
};

export default function Page() {
  return (
    <Section>
      <h1 className="text-[length:var(--text-h1)] font-extrabold text-black/90">Impressum</h1>
      <p className="mt-4 text-black/75 max-w-prose">
        Anbieterkennzeichnung gemäß §5 TMG. Angaben werden nachgereicht. Für rechtliche
        Anfragen kontaktieren Sie uns bitte über das Kontaktformular.
      </p>
    </Section>
  );
}
