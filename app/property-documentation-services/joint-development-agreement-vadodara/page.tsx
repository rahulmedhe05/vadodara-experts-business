import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-documentation-services")!;

export const metadata: Metadata = {
  title: "Joint development agreement in Vadodara | Property Documentation Services | VadodaraExperts",
  description: "Professional joint development agreement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-documentation-services/joint-development-agreement-vadodara" },
  openGraph: {
    title: "Joint development agreement in Vadodara | VadodaraExperts",
    description: "Professional joint development agreement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-documentation-services/joint-development-agreement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="joint-development-agreement-vadodara" />;
}
