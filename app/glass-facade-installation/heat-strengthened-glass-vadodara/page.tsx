import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("glass-facade-installation")!;

export const metadata: Metadata = {
  title: "heat strengthened glass in Vadodara | Glass Facade Installation | VadodaraExperts",
  description: "Professional heat strengthened glass services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/glass-facade-installation/heat-strengthened-glass-vadodara" },
  openGraph: {
    title: "heat strengthened glass in Vadodara | VadodaraExperts",
    description: "Professional heat strengthened glass services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/glass-facade-installation/heat-strengthened-glass-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="heat-strengthened-glass-vadodara" />;
}
