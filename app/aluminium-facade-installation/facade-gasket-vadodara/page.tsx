import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("aluminium-facade-installation")!;

export const metadata: Metadata = {
  title: "facade gasket in Vadodara | Aluminium Facade Installation | VadodaraExperts",
  description: "Professional facade gasket services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/aluminium-facade-installation/facade-gasket-vadodara" },
  openGraph: {
    title: "facade gasket in Vadodara | VadodaraExperts",
    description: "Professional facade gasket services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/aluminium-facade-installation/facade-gasket-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="facade-gasket-vadodara" />;
}
