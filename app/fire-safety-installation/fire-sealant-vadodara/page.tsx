import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "fire sealant in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional fire sealant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/fire-sealant-vadodara" },
  openGraph: {
    title: "fire sealant in Vadodara | VadodaraExperts",
    description: "Professional fire sealant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/fire-sealant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-sealant-vadodara" />;
}
