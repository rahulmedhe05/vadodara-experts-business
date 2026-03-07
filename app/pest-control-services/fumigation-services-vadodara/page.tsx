import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pest-control-services")!;

export const metadata: Metadata = {
  title: "Fumigation services in Vadodara | Pest Control Services | VadodaraExperts",
  description: "Professional fumigation services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pest-control-services/fumigation-services-vadodara" },
  openGraph: {
    title: "Fumigation services in Vadodara | VadodaraExperts",
    description: "Professional fumigation services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pest-control-services/fumigation-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fumigation-services-vadodara" />;
}
