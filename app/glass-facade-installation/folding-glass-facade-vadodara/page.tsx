import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("glass-facade-installation")!;

export const metadata: Metadata = {
  title: "folding glass facade in Vadodara | Glass Facade Installation | VadodaraExperts",
  description: "Professional folding glass facade services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/glass-facade-installation/folding-glass-facade-vadodara" },
  openGraph: {
    title: "folding glass facade in Vadodara | VadodaraExperts",
    description: "Professional folding glass facade services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/glass-facade-installation/folding-glass-facade-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="folding-glass-facade-vadodara" />;
}
