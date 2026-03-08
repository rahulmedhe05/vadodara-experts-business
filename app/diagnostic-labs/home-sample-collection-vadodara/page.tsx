import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("diagnostic-labs")!;

export const metadata: Metadata = {
  title: "Home sample collection in Vadodara | Diagnostic Labs | VadodaraExperts",
  description: "Professional home sample collection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/diagnostic-labs/home-sample-collection-vadodara" },
  openGraph: {
    title: "Home sample collection in Vadodara | VadodaraExperts",
    description: "Professional home sample collection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/diagnostic-labs/home-sample-collection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="home-sample-collection-vadodara" />;
}
