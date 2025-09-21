import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Wire up next-intl to provide request-scoped i18n to server components
const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Only light mode is supported; ensure color-scheme is not set to dark anywhere
  // Additional config (images, experimental flags) can be added as needed
};

export default withNextIntl(nextConfig);
