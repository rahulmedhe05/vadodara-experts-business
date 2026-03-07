import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-documentation-services")!;

export const metadata: Metadata = {
  title: "Cancellation deed in Vadodara | Property Documentation Services | VadodaraExperts",
  description: "Professional cancellation deed services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-documentation-services/cancellation-deed-vadodara" },
  openGraph: {
    title: "Cancellation deed in Vadodara | VadodaraExperts",
    description: "Professional cancellation deed services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-documentation-services/cancellation-deed-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cancellation-deed-vadodara" />;
}
