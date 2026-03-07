import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("false-ceiling-services")!;

export const metadata: Metadata = {
  title: "False ceiling replacement in Vadodara | False Ceiling Services | VadodaraExperts",
  description: "Professional false ceiling replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/false-ceiling-services/false-ceiling-replacement-vadodara" },
  openGraph: {
    title: "False ceiling replacement in Vadodara | VadodaraExperts",
    description: "Professional false ceiling replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/false-ceiling-services/false-ceiling-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="false-ceiling-replacement-vadodara" />;
}
