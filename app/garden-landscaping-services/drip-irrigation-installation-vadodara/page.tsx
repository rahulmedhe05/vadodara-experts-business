import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garden-landscaping-services")!;

export const metadata: Metadata = {
  title: "Drip irrigation installation in Vadodara | Garden Landscaping Services | VadodaraExperts",
  description: "Professional drip irrigation installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garden-landscaping-services/drip-irrigation-installation-vadodara" },
  openGraph: {
    title: "Drip irrigation installation in Vadodara | VadodaraExperts",
    description: "Professional drip irrigation installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garden-landscaping-services/drip-irrigation-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="drip-irrigation-installation-vadodara" />;
}
