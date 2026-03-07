import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("structural-engineering-services")!;

export const metadata: Metadata = {
  title: "Pre engineered building design in Vadodara | Structural Engineering Services | VadodaraExperts",
  description: "Professional pre engineered building design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/structural-engineering-services/pre-engineered-building-design-vadodara" },
  openGraph: {
    title: "Pre engineered building design in Vadodara | VadodaraExperts",
    description: "Professional pre engineered building design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/structural-engineering-services/pre-engineered-building-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pre-engineered-building-design-vadodara" />;
}
