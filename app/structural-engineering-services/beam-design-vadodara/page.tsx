import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("structural-engineering-services")!;

export const metadata: Metadata = {
  title: "Beam design in Vadodara | Structural Engineering Services | VadodaraExperts",
  description: "Professional beam design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/structural-engineering-services/beam-design-vadodara" },
  openGraph: {
    title: "Beam design in Vadodara | VadodaraExperts",
    description: "Professional beam design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/structural-engineering-services/beam-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="beam-design-vadodara" />;
}
