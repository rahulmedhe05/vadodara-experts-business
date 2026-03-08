import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-documentation-services")!;

export const metadata: Metadata = {
  title: "Letter of administration in Vadodara | Property Documentation Services | VadodaraExperts",
  description: "Professional letter of administration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-documentation-services/letter-of-administration-vadodara" },
  openGraph: {
    title: "Letter of administration in Vadodara | VadodaraExperts",
    description: "Professional letter of administration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-documentation-services/letter-of-administration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="letter-of-administration-vadodara" />;
}
