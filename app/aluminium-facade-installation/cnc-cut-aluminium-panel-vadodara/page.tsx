import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("aluminium-facade-installation")!;

export const metadata: Metadata = {
  title: "CNC cut aluminium panel in Vadodara | Aluminium Facade Installation | VadodaraExperts",
  description: "Professional cnc cut aluminium panel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/aluminium-facade-installation/cnc-cut-aluminium-panel-vadodara" },
  openGraph: {
    title: "CNC cut aluminium panel in Vadodara | VadodaraExperts",
    description: "Professional cnc cut aluminium panel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/aluminium-facade-installation/cnc-cut-aluminium-panel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cnc-cut-aluminium-panel-vadodara" />;
}
