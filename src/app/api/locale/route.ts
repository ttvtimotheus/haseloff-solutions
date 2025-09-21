import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const contentType = req.headers.get("content-type") || "";
  let locale = "en";
  let redirectTo = "/";

  if (contentType.includes("application/json")) {
    const body = await req.json().catch(() => ({}));
    locale = (body.locale as string) || "en";
    redirectTo = (body.redirectTo as string) || "/";
  } else {
    const form = await req.formData();
    locale = String(form.get("locale") || "en");
    redirectTo = String(form.get("redirectTo") || "/");
  }

  const store = await cookies();
  store.set("locale", locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });

  return NextResponse.redirect(new URL(redirectTo, req.url));
}
