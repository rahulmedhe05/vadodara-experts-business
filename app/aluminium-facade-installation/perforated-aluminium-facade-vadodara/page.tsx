import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("aluminium-facade-installation")!;

export const metadata: Metadata = {
  title: "perforated aluminium facade in Vadodara | Aluminium Facade Installation | VadodaraExperts",
  description: "Professional perforated aluminium facade services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/aluminium-facade-installation/perforated-aluminium-facade-vadodara" },
  openGraph: {
    title: "perforated aluminium facade in Vadodara | VadodaraExperts",
    description: "Professional perforated aluminium facade services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/aluminium-facade-installation/perforated-aluminium-facade-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="perforated-aluminium-facade-vadodara" />;
}
