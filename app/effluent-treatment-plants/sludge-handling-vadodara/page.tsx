import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("effluent-treatment-plants")!;

export const metadata: Metadata = {
  title: "sludge handling in Vadodara | Effluent Treatment Plants | VadodaraExperts",
  description: "Professional sludge handling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/effluent-treatment-plants/sludge-handling-vadodara" },
  openGraph: {
    title: "sludge handling in Vadodara | VadodaraExperts",
    description: "Professional sludge handling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/effluent-treatment-plants/sludge-handling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sludge-handling-vadodara" />;
}
