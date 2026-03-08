import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("aluminium-facade-installation")!;

export const metadata: Metadata = {
  title: "old facade replacement in Vadodara | Aluminium Facade Installation | VadodaraExperts",
  description: "Professional old facade replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/aluminium-facade-installation/old-facade-replacement-vadodara" },
  openGraph: {
    title: "old facade replacement in Vadodara | VadodaraExperts",
    description: "Professional old facade replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/aluminium-facade-installation/old-facade-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="old-facade-replacement-vadodara" />;
}
