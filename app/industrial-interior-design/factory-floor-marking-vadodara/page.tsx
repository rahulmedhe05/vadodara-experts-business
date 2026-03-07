import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "factory floor marking in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional factory floor marking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/factory-floor-marking-vadodara" },
  openGraph: {
    title: "factory floor marking in Vadodara | VadodaraExperts",
    description: "Professional factory floor marking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/factory-floor-marking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-floor-marking-vadodara" />;
}
