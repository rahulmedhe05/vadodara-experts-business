import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("aluminium-facade-installation")!;

export const metadata: Metadata = {
  title: "silicone sealant facade in Vadodara | Aluminium Facade Installation | VadodaraExperts",
  description: "Professional silicone sealant facade services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/aluminium-facade-installation/silicone-sealant-facade-vadodara" },
  openGraph: {
    title: "silicone sealant facade in Vadodara | VadodaraExperts",
    description: "Professional silicone sealant facade services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/aluminium-facade-installation/silicone-sealant-facade-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="silicone-sealant-facade-vadodara" />;
}
