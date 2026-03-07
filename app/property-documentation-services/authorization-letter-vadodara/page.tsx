import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-documentation-services")!;

export const metadata: Metadata = {
  title: "Authorization letter in Vadodara | Property Documentation Services | VadodaraExperts",
  description: "Professional authorization letter services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-documentation-services/authorization-letter-vadodara" },
  openGraph: {
    title: "Authorization letter in Vadodara | VadodaraExperts",
    description: "Professional authorization letter services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-documentation-services/authorization-letter-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="authorization-letter-vadodara" />;
}
