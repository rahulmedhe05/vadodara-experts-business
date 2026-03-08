import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("aluminium-facade-installation")!;

export const metadata: Metadata = {
  title: "phenolic panel facade in Vadodara | Aluminium Facade Installation | VadodaraExperts",
  description: "Professional phenolic panel facade services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/aluminium-facade-installation/phenolic-panel-facade-vadodara" },
  openGraph: {
    title: "phenolic panel facade in Vadodara | VadodaraExperts",
    description: "Professional phenolic panel facade services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/aluminium-facade-installation/phenolic-panel-facade-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="phenolic-panel-facade-vadodara" />;
}
