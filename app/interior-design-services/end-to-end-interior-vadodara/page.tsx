import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-design-services")!;

export const metadata: Metadata = {
  title: "End to end interior in Vadodara | Interior Design Services | VadodaraExperts",
  description: "Professional end to end interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-design-services/end-to-end-interior-vadodara" },
  openGraph: {
    title: "End to end interior in Vadodara | VadodaraExperts",
    description: "Professional end to end interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-design-services/end-to-end-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="end-to-end-interior-vadodara" />;
}
