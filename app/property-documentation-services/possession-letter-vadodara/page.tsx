import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-documentation-services")!;

export const metadata: Metadata = {
  title: "Possession letter in Vadodara | Property Documentation Services | VadodaraExperts",
  description: "Professional possession letter services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-documentation-services/possession-letter-vadodara" },
  openGraph: {
    title: "Possession letter in Vadodara | VadodaraExperts",
    description: "Professional possession letter services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-documentation-services/possession-letter-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="possession-letter-vadodara" />;
}
