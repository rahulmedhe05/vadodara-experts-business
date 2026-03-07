import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("glass-facade-installation")!;

export const metadata: Metadata = {
  title: "glass partition facade in Vadodara | Glass Facade Installation | VadodaraExperts",
  description: "Professional glass partition facade services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/glass-facade-installation/glass-partition-facade-vadodara" },
  openGraph: {
    title: "glass partition facade in Vadodara | VadodaraExperts",
    description: "Professional glass partition facade services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/glass-facade-installation/glass-partition-facade-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="glass-partition-facade-vadodara" />;
}
