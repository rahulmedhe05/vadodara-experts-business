import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-demolition-services")!;

export const metadata: Metadata = {
  title: "reinforced concrete demolition in Vadodara | Building Demolition Services | VadodaraExperts",
  description: "Professional reinforced concrete demolition services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-demolition-services/reinforced-concrete-demolition-vadodara" },
  openGraph: {
    title: "reinforced concrete demolition in Vadodara | VadodaraExperts",
    description: "Professional reinforced concrete demolition services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-demolition-services/reinforced-concrete-demolition-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="reinforced-concrete-demolition-vadodara" />;
}
