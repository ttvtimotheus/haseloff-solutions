import { cookies, headers } from "next/headers";
import { getRequestConfig } from "next-intl/server";

const SUPPORTED = ["de", "en"] as const;
export type Locale = (typeof SUPPORTED)[number];

function pickLocaleFromAcceptLanguage(al: string | null | undefined): Locale {
  if (!al) return "en";
  // Simple negotiation: prefer "de" if present, else fallback to "en"
  const lower = al.toLowerCase();
  return lower.includes("de") ? "de" : "en";
}

export default getRequestConfig(async () => {
  const store = await cookies();
  const cookieLocale = store.get("locale")?.value as Locale | undefined;
  let locale: Locale | undefined = cookieLocale && (SUPPORTED as readonly string[]).includes(cookieLocale) ? cookieLocale as Locale : undefined;

  if (!locale) {
    const h = await headers();
    locale = pickLocaleFromAcceptLanguage(h.get("accept-language"));
  }

  // Import messages for selected locale
  const messages = (await import(`../messages/${locale}.json`)).default;

  return {
    locale,
    messages,
  };
});
