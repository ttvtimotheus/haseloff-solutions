import type { Metadata } from "next";
import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Haseloff Software Solutions",
  description: "Individuelle Software. Von Hand gemacht.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    type: "website",
    siteName: "Haseloff Software Solutions",
    title: "Haseloff Software Solutions",
    description: "Individuelle Software. Von Hand gemacht.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haseloff Software Solutions",
    description: "Individuelle Software. Von Hand gemacht.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className="antialiased bg-background text-foreground">
        <NextIntlClientProvider
          messages={messages}
          timeZone="Europe/Berlin"
          now={new Date()}
          locale={locale}
        >
          <Header />
          <main id="main" aria-labelledby="page-title" className="min-h-screen">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
