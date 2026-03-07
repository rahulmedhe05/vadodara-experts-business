import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "Joint development agreement review in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional joint development agreement review services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/joint-development-agreement-review-vadodara" },
  openGraph: {
    title: "Joint development agreement review in Vadodara | VadodaraExperts",
    description: "Professional joint development agreement review services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/joint-development-agreement-review-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="joint-development-agreement-review-vadodara" />;
}
