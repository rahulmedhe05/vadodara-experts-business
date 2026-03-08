import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-pest-control")!;

export const metadata: Metadata = {
  title: "Commercial Pest Control Vs Alternatives in Vadodara | Commercial Pest Control | VadodaraExperts",
  description: "Professional commercial pest control vs alternatives services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-pest-control/commercial-pest-control-vs-alternatives-vadodara" },
  openGraph: {
    title: "Commercial Pest Control Vs Alternatives in Vadodara | VadodaraExperts",
    description: "Professional commercial pest control vs alternatives services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-pest-control/commercial-pest-control-vs-alternatives-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="commercial-pest-control-vs-alternatives-vadodara" />;
}
