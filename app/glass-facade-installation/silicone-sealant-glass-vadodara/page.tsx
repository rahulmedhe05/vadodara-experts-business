import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("glass-facade-installation")!;

export const metadata: Metadata = {
  title: "silicone sealant glass in Vadodara | Glass Facade Installation | VadodaraExperts",
  description: "Professional silicone sealant glass services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/glass-facade-installation/silicone-sealant-glass-vadodara" },
  openGraph: {
    title: "silicone sealant glass in Vadodara | VadodaraExperts",
    description: "Professional silicone sealant glass services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/glass-facade-installation/silicone-sealant-glass-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="silicone-sealant-glass-vadodara" />;
}
