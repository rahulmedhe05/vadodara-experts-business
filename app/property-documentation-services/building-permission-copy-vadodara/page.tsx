import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-documentation-services")!;

export const metadata: Metadata = {
  title: "Building permission copy in Vadodara | Property Documentation Services | VadodaraExperts",
  description: "Professional building permission copy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-documentation-services/building-permission-copy-vadodara" },
  openGraph: {
    title: "Building permission copy in Vadodara | VadodaraExperts",
    description: "Professional building permission copy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-documentation-services/building-permission-copy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="building-permission-copy-vadodara" />;
}
