import type { CSSProperties } from "react";

export default function NoiseLayer() {
  const style: CSSProperties & { [key: string]: string | undefined } = {
    // optional: set a data-uri noise image via CSS var from env if available
    "--noise-image": process.env.NEXT_PUBLIC_NOISE_DATA_URI,
  };
  return <div aria-hidden className="pointer-events-none absolute inset-0 bg-noise" style={style} />;
}
