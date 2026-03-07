import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("aluminium-facade-installation")!;

export const metadata: Metadata = {
  title: "facade wind load analysis in Vadodara | Aluminium Facade Installation | VadodaraExperts",
  description: "Professional facade wind load analysis services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/aluminium-facade-installation/facade-wind-load-analysis-vadodara" },
  openGraph: {
    title: "facade wind load analysis in Vadodara | VadodaraExperts",
    description: "Professional facade wind load analysis services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/aluminium-facade-installation/facade-wind-load-analysis-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="facade-wind-load-analysis-vadodara" />;
}
