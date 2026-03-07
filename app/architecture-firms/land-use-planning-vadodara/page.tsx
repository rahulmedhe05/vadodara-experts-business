import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("architecture-firms")!;

export const metadata: Metadata = {
  title: "Land use planning in Vadodara | Architecture Firms | VadodaraExperts",
  description: "Professional land use planning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/architecture-firms/land-use-planning-vadodara" },
  openGraph: {
    title: "Land use planning in Vadodara | VadodaraExperts",
    description: "Professional land use planning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/architecture-firms/land-use-planning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="land-use-planning-vadodara" />;
}
