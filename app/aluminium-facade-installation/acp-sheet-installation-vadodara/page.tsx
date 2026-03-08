import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("aluminium-facade-installation")!;

export const metadata: Metadata = {
  title: "ACP sheet installation in Vadodara | Aluminium Facade Installation | VadodaraExperts",
  description: "Professional acp sheet installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/aluminium-facade-installation/acp-sheet-installation-vadodara" },
  openGraph: {
    title: "ACP sheet installation in Vadodara | VadodaraExperts",
    description: "Professional acp sheet installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/aluminium-facade-installation/acp-sheet-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="acp-sheet-installation-vadodara" />;
}
