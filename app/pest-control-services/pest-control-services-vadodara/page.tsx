import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pest-control-services")!;

export const metadata: Metadata = {
  title: "Pest control services in Vadodara | Pest Control Services | VadodaraExperts",
  description: "Professional pest control services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pest-control-services/pest-control-services-vadodara" },
  openGraph: {
    title: "Pest control services in Vadodara | VadodaraExperts",
    description: "Professional pest control services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pest-control-services/pest-control-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pest-control-services-vadodara" />;
}
