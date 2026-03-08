import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("structural-engineering-services")!;

export const metadata: Metadata = {
  title: "Basement structural design in Vadodara | Structural Engineering Services | VadodaraExperts",
  description: "Professional basement structural design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/structural-engineering-services/basement-structural-design-vadodara" },
  openGraph: {
    title: "Basement structural design in Vadodara | VadodaraExperts",
    description: "Professional basement structural design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/structural-engineering-services/basement-structural-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="basement-structural-design-vadodara" />;
}
