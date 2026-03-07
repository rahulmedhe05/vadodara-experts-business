import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("landscape-architecture")!;

export const metadata: Metadata = {
  title: "Amphitheater design in Vadodara | Landscape Architecture | VadodaraExperts",
  description: "Professional amphitheater design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/landscape-architecture/amphitheater-design-vadodara" },
  openGraph: {
    title: "Amphitheater design in Vadodara | VadodaraExperts",
    description: "Professional amphitheater design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/landscape-architecture/amphitheater-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="amphitheater-design-vadodara" />;
}
