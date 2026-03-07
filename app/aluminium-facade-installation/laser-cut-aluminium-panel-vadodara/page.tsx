import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("aluminium-facade-installation")!;

export const metadata: Metadata = {
  title: "laser cut aluminium panel in Vadodara | Aluminium Facade Installation | VadodaraExperts",
  description: "Professional laser cut aluminium panel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/aluminium-facade-installation/laser-cut-aluminium-panel-vadodara" },
  openGraph: {
    title: "laser cut aluminium panel in Vadodara | VadodaraExperts",
    description: "Professional laser cut aluminium panel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/aluminium-facade-installation/laser-cut-aluminium-panel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="laser-cut-aluminium-panel-vadodara" />;
}
