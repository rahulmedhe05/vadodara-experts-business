import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("false-ceiling-services")!;

export const metadata: Metadata = {
  title: "Moisture proof ceiling in Vadodara | False Ceiling Services | VadodaraExperts",
  description: "Professional moisture proof ceiling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/false-ceiling-services/moisture-proof-ceiling-vadodara" },
  openGraph: {
    title: "Moisture proof ceiling in Vadodara | VadodaraExperts",
    description: "Professional moisture proof ceiling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/false-ceiling-services/moisture-proof-ceiling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="moisture-proof-ceiling-vadodara" />;
}
