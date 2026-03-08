import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "water supply planning layout in Vadodara | Land Development Consultancy | VadodaraExperts",
  description: "Professional water supply planning layout services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy/water-supply-planning-layout-vadodara" },
  openGraph: {
    title: "water supply planning layout in Vadodara | VadodaraExperts",
    description: "Professional water supply planning layout services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-development-consultancy/water-supply-planning-layout-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-supply-planning-layout-vadodara" />;
}
