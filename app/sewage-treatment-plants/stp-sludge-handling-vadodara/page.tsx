import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sewage-treatment-plants")!;

export const metadata: Metadata = {
  title: "STP sludge handling in Vadodara | Sewage Treatment Plants | VadodaraExperts",
  description: "Professional stp sludge handling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sewage-treatment-plants/stp-sludge-handling-vadodara" },
  openGraph: {
    title: "STP sludge handling in Vadodara | VadodaraExperts",
    description: "Professional stp sludge handling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sewage-treatment-plants/stp-sludge-handling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="stp-sludge-handling-vadodara" />;
}
