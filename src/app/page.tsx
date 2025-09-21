import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
import ContactForm from "@/components/ContactForm";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Hero");
  return {
    title: "Haseloff Software Solutions",
    description: t("subline"),
    openGraph: {
      title: "Haseloff Software Solutions",
      description: t("subline"),
      type: "website",
      url: "/",
    },
    twitter: {
      card: "summary_large_image",
      title: "Haseloff Software Solutions",
      description: t("subline"),
    },
  };
}

export default function Home({ searchParams }: { searchParams?: { ok?: string } }) {
  return (
    <>
      <Hero />
      <Projects />
      <Services />
      <Philosophy />
      <ContactForm searchParams={searchParams} />
    </>
  );
}
