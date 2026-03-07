import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("aluminium-facade-installation")!;

export const metadata: Metadata = {
  title: "A2 grade ACP in Vadodara | Aluminium Facade Installation | VadodaraExperts",
  description: "Professional a2 grade acp services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/aluminium-facade-installation/a2-grade-acp-vadodara" },
  openGraph: {
    title: "A2 grade ACP in Vadodara | VadodaraExperts",
    description: "Professional a2 grade acp services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/aluminium-facade-installation/a2-grade-acp-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="a2-grade-acp-vadodara" />;
}
