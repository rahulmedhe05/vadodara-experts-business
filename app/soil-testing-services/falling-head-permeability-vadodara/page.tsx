import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("soil-testing-services")!;

export const metadata: Metadata = {
  title: "falling head permeability in Vadodara | Soil Testing Services | VadodaraExperts",
  description: "Professional falling head permeability services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/soil-testing-services/falling-head-permeability-vadodara" },
  openGraph: {
    title: "falling head permeability in Vadodara | VadodaraExperts",
    description: "Professional falling head permeability services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/soil-testing-services/falling-head-permeability-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="falling-head-permeability-vadodara" />;
}
