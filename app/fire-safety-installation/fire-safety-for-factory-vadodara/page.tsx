import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "fire safety for factory in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional fire safety for factory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/fire-safety-for-factory-vadodara" },
  openGraph: {
    title: "fire safety for factory in Vadodara | VadodaraExperts",
    description: "Professional fire safety for factory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/fire-safety-for-factory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-safety-for-factory-vadodara" />;
}
