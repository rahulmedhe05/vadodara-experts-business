import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pest-control-services")!;

export const metadata: Metadata = {
  title: "Rat trap service in Vadodara | Pest Control Services | VadodaraExperts",
  description: "Professional rat trap service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pest-control-services/rat-trap-service-vadodara" },
  openGraph: {
    title: "Rat trap service in Vadodara | VadodaraExperts",
    description: "Professional rat trap service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pest-control-services/rat-trap-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rat-trap-service-vadodara" />;
}
