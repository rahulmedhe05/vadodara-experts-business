import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-pest-control")!;

export const metadata: Metadata = {
  title: "Cheap Commercial Pest Control in Vadodara | Commercial Pest Control | VadodaraExperts",
  description: "Professional cheap commercial pest control services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-pest-control/cheap-commercial-pest-control-vadodara" },
  openGraph: {
    title: "Cheap Commercial Pest Control in Vadodara | VadodaraExperts",
    description: "Professional cheap commercial pest control services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-pest-control/cheap-commercial-pest-control-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cheap-commercial-pest-control-vadodara" />;
}
