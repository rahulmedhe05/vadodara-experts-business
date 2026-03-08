import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("architecture-firms")!;

export const metadata: Metadata = {
  title: "3D floor plan in Vadodara | Architecture Firms | VadodaraExperts",
  description: "Professional 3d floor plan services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/architecture-firms/3d-floor-plan-vadodara" },
  openGraph: {
    title: "3D floor plan in Vadodara | VadodaraExperts",
    description: "Professional 3d floor plan services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/architecture-firms/3d-floor-plan-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="3d-floor-plan-vadodara" />;
}
