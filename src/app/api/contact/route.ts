import { NextRequest, NextResponse } from "next/server";

function isValidEmail(email: string) {
  return /.+@.+\..+/.test(email);
}

export async function POST(req: NextRequest) {
  const contentType = req.headers.get("content-type") || "";

  let name = "";
  let email = "";
  let message = "";
  let redirectTo = "/kontakt?ok=1";

  try {
    if (contentType.includes("application/json")) {
      const body = await req.json();
      name = String(body.name || "").trim();
      email = String(body.email || "").trim();
      message = String(body.message || "").trim();
      redirectTo = String(body.redirectTo || redirectTo);
    } else {
      const form = await req.formData();
      name = String(form.get("name") || "").trim();
      email = String(form.get("email") || "").trim();
      message = String(form.get("message") || "").trim();
      redirectTo = String(form.get("redirectTo") || redirectTo);
    }

    if (!name || !email || !message || !isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: "Invalid input" }, { status: 400 });
    }

    // Here you could send an email or persist to a DB.
    // This endpoint validates input and returns a success response or redirect.

    const accept = req.headers.get("accept") || "";
    if (accept.includes("text/html")) {
      return NextResponse.redirect(new URL(redirectTo, req.url));
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
