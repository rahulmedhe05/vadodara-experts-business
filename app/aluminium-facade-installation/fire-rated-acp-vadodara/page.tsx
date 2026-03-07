import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("aluminium-facade-installation")!;

export const metadata: Metadata = {
  title: "fire rated ACP in Vadodara | Aluminium Facade Installation | VadodaraExperts",
  description: "Professional fire rated acp services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/aluminium-facade-installation/fire-rated-acp-vadodara" },
  openGraph: {
    title: "fire rated ACP in Vadodara | VadodaraExperts",
    description: "Professional fire rated acp services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/aluminium-facade-installation/fire-rated-acp-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-rated-acp-vadodara" />;
}
