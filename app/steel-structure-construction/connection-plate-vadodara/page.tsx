import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-structure-construction")!;

export const metadata: Metadata = {
  title: "connection plate in Vadodara | Steel Structure Construction | VadodaraExperts",
  description: "Professional connection plate services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-structure-construction/connection-plate-vadodara" },
  openGraph: {
    title: "connection plate in Vadodara | VadodaraExperts",
    description: "Professional connection plate services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-structure-construction/connection-plate-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="connection-plate-vadodara" />;
}
