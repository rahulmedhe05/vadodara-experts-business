import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "industrial paint shop design in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional industrial paint shop design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/industrial-paint-shop-design-vadodara" },
  openGraph: {
    title: "industrial paint shop design in Vadodara | VadodaraExperts",
    description: "Professional industrial paint shop design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/industrial-paint-shop-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-paint-shop-design-vadodara" />;
}
