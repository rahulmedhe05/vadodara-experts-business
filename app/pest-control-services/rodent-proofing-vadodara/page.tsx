import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pest-control-services")!;

export const metadata: Metadata = {
  title: "Rodent proofing in Vadodara | Pest Control Services | VadodaraExperts",
  description: "Professional rodent proofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pest-control-services/rodent-proofing-vadodara" },
  openGraph: {
    title: "Rodent proofing in Vadodara | VadodaraExperts",
    description: "Professional rodent proofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pest-control-services/rodent-proofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rodent-proofing-vadodara" />;
}
