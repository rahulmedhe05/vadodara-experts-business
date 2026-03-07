import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("soil-testing-services")!;

export const metadata: Metadata = {
  title: "constant head permeability in Vadodara | Soil Testing Services | VadodaraExperts",
  description: "Professional constant head permeability services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/soil-testing-services/constant-head-permeability-vadodara" },
  openGraph: {
    title: "constant head permeability in Vadodara | VadodaraExperts",
    description: "Professional constant head permeability services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/soil-testing-services/constant-head-permeability-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="constant-head-permeability-vadodara" />;
}
