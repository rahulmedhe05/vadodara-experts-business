import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "industrial color scheme in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional industrial color scheme services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/industrial-color-scheme-vadodara" },
  openGraph: {
    title: "industrial color scheme in Vadodara | VadodaraExperts",
    description: "Professional industrial color scheme services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/industrial-color-scheme-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-color-scheme-vadodara" />;
}
