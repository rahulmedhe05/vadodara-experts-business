import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-pest-control")!;

export const metadata: Metadata = {
  title: "Trusted Commercial Pest Control in Vadodara | Commercial Pest Control | VadodaraExperts",
  description: "Professional trusted commercial pest control services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-pest-control/trusted-commercial-pest-control-vadodara" },
  openGraph: {
    title: "Trusted Commercial Pest Control in Vadodara | VadodaraExperts",
    description: "Professional trusted commercial pest control services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-pest-control/trusted-commercial-pest-control-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="trusted-commercial-pest-control-vadodara" />;
}
