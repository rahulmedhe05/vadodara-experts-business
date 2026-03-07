import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "manufacturing unit interior in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional manufacturing unit interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/manufacturing-unit-interior-vadodara" },
  openGraph: {
    title: "manufacturing unit interior in Vadodara | VadodaraExperts",
    description: "Professional manufacturing unit interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/manufacturing-unit-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="manufacturing-unit-interior-vadodara" />;
}
