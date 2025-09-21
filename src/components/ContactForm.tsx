import Section from "@/components/Section";
import { useTranslations } from "next-intl";
import { Button } from "@/components/Button";
import Link from "next/link";

export default function ContactForm({ searchParams }: { searchParams?: { ok?: string } }) {
  const t = useTranslations("Contact");
  const ok = searchParams?.ok === "1";
  const mailHref = "mailto:timo@haseloff-solutions.de";

  return (
    <Section id="kontakt" ariaLabelledby="contact-title">
      <h2 id="contact-title" className="text-[length:var(--text-h2)] font-extrabold text-black/90">
        {t("title")}
      </h2>
      <p className="mt-2 text-black/75 max-w-prose">{t("intro")}</p>

      {ok && (
        <div role="status" aria-live="polite" className="mt-4 rounded-lg bg-green-50 text-green-900 ring-1 ring-green-200 p-3">
          {t("success")}
        </div>
      )}

      <form
        className="mt-6 grid gap-4 max-w-xl"
        method="POST"
        action="/api/contact"
        noValidate
      >
        <label className="grid gap-1">
          <span className="text-sm font-medium">{t("name")}</span>
          <input id="name" name="name" type="text" required aria-describedby="name-error" className="h-11 rounded-xl border border-black/10 px-3 focus-ring" />
          <p id="name-error" className="sr-only" aria-live="polite" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">{t("email")}</span>
          <input id="email" name="email" type="email" required aria-describedby="email-error" className="h-11 rounded-xl border border-black/10 px-3 focus-ring" />
          <p id="email-error" className="sr-only" aria-live="polite" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">{t("message")}</span>
          <textarea id="message" name="message" required aria-describedby="message-error" rows={5} className="rounded-xl border border-black/10 px-3 py-2 focus-ring" />
          <p id="message-error" className="sr-only" aria-live="polite" />
        </label>
        <input type="hidden" name="redirectTo" value="/kontakt?ok=1" />
        <Button type="submit" variant="primary" size="lg" className="w-fit">
          {t("submit")}
        </Button>
        <p className="text-sm text-black/70">
          {t("altMail")} <Link href={mailHref} className="text-primary-700 hover:underline">{mailHref}</Link>
        </p>
      </form>
      {/* Client-side ARIA validation enhancer (progressive enhancement) */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(() => {
  if (typeof window === 'undefined') return;
  const form = document.querySelector('form[action="/api/contact"]');
  if (!form) return;
  const fields = [
    { id: 'name', type: 'text', required: true },
    { id: 'email', type: 'email', required: true },
    { id: 'message', type: 'text', required: true },
  ];
  function setError(id, msg) {
    const input = document.getElementById(id);
    const err = document.getElementById(id + '-error');
    if (!input || !err) return;
    if (msg) {
      input.setAttribute('aria-invalid', 'true');
      err.classList.remove('sr-only');
      err.textContent = msg;
    } else {
      input.removeAttribute('aria-invalid');
      err.classList.add('sr-only');
      err.textContent = '';
    }
  }
  function validate() {
    let ok = true;
    for (const f of fields) {
      const el = document.getElementById(f.id);
      if (!el) continue;
      const val = /** @type {HTMLInputElement|HTMLTextAreaElement} */ (el).value.trim();
      let msg = '';
      if (f.required && !val) msg = 'Pflichtfeld';
      if (!msg && f.type === 'email' && val && !/.+@.+\..+/.test(val)) msg = 'Ungültige E-Mail';
      setError(f.id, msg);
      if (msg) ok = false;
    }
    return ok;
  }
  form.addEventListener('input', (e) => {
    const t = e.target;
    if (!(t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement)) return;
    const id = t.id;
    if (!id) return;
    // Revalidate single field
    const f = fields.find(x => x.id === id);
    if (!f) return;
    let msg = '';
    const val = t.value.trim();
    if (f.required && !val) msg = 'Pflichtfeld';
    if (!msg && f.type === 'email' && val && !/.+@.+\..+/.test(val)) msg = 'Ungültige E-Mail';
    setError(id, msg);
  });
  form.addEventListener('submit', (e) => {
    if (!validate()) {
      e.preventDefault();
    }
  });
})();`,
        }}
      />
    </Section>
  );
}
