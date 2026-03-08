import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-documentation-services")!;

export const metadata: Metadata = {
  title: "Family arrangement deed in Vadodara | Property Documentation Services | VadodaraExperts",
  description: "Professional family arrangement deed services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-documentation-services/family-arrangement-deed-vadodara" },
  openGraph: {
    title: "Family arrangement deed in Vadodara | VadodaraExperts",
    description: "Professional family arrangement deed services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-documentation-services/family-arrangement-deed-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="family-arrangement-deed-vadodara" />;
}
