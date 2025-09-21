"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useSearchParams } from "next/navigation";
import { useTransition } from "react";

export default function LocaleToggle() {
  const locale = useLocale();
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [pending, startTransition] = useTransition();

  const redirectTo = `${pathname}${searchParams.size ? `?${searchParams.toString()}` : ""}`;

  return (
    <form
      action="/api/locale"
      method="POST"
      className="flex items-center gap-2"
      aria-label={t("language")}
    >
      <input type="hidden" name="redirectTo" value={redirectTo} />
      <select
        name="locale"
        defaultValue={locale}
        className="h-9 rounded-lg border border-black/10 bg-white px-2 text-sm focus-ring"
        onChange={(e) => {
          startTransition(() => {
            (e.currentTarget.form as HTMLFormElement)?.requestSubmit();
          });
        }}
        aria-label={t("language")}
        disabled={pending}
      >
        <option value="de">Deutsch</option>
        <option value="en">English</option>
      </select>
      <noscript>
        <button type="submit" className="h-9 rounded-lg border border-black/10 bg-white px-2 text-sm focus-ring">OK</button>
      </noscript>
    </form>
  );
}
