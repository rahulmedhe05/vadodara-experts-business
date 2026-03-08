import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("structural-engineering-services")!;

export const metadata: Metadata = {
  title: "Staircase design structural in Vadodara | Structural Engineering Services | VadodaraExperts",
  description: "Professional staircase design structural services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/structural-engineering-services/staircase-design-structural-vadodara" },
  openGraph: {
    title: "Staircase design structural in Vadodara | VadodaraExperts",
    description: "Professional staircase design structural services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/structural-engineering-services/staircase-design-structural-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="staircase-design-structural-vadodara" />;
}
