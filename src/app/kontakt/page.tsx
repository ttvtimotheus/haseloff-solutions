import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Kontakt | Haseloff Software Solutions",
};

export default function Page({ searchParams }: { searchParams?: { ok?: string } }) {
  return <ContactForm searchParams={searchParams} />;
}
