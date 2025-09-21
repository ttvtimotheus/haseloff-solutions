import Section from "@/components/Section";

export const metadata = {
  title: "Datenschutz | Haseloff Software Solutions",
};

export default function Page() {
  return (
    <Section>
      <h1 className="text-[length:var(--text-h1)] font-extrabold text-black/90">Datenschutz</h1>
      <p className="mt-4 text-black/75 max-w-prose">
        Wir nehmen den Schutz Ihrer Daten ernst. Details zur Verarbeitung personenbezogener Daten und Ihren Rechten
        werden hier nachgereicht. Bis dahin erheben wir keinerlei Tracking-Daten.
      </p>
    </Section>
  );
}
