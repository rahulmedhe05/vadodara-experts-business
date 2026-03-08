import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pest-control-services")!;

export const metadata: Metadata = {
  title: "Pest control company in Vadodara | Pest Control Services | VadodaraExperts",
  description: "Professional pest control company services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pest-control-services/pest-control-company-vadodara" },
  openGraph: {
    title: "Pest control company in Vadodara | VadodaraExperts",
    description: "Professional pest control company services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pest-control-services/pest-control-company-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pest-control-company-vadodara" />;
}
