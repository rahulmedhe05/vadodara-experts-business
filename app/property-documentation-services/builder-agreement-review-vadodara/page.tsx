import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-documentation-services")!;

export const metadata: Metadata = {
  title: "Builder agreement review in Vadodara | Property Documentation Services | VadodaraExperts",
  description: "Professional builder agreement review services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-documentation-services/builder-agreement-review-vadodara" },
  openGraph: {
    title: "Builder agreement review in Vadodara | VadodaraExperts",
    description: "Professional builder agreement review services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-documentation-services/builder-agreement-review-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="builder-agreement-review-vadodara" />;
}
