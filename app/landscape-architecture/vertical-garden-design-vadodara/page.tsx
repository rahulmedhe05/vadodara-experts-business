import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("landscape-architecture")!;

export const metadata: Metadata = {
  title: "Vertical garden design in Vadodara | Landscape Architecture | VadodaraExperts",
  description: "Professional vertical garden design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/landscape-architecture/vertical-garden-design-vadodara" },
  openGraph: {
    title: "Vertical garden design in Vadodara | VadodaraExperts",
    description: "Professional vertical garden design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/landscape-architecture/vertical-garden-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="vertical-garden-design-vadodara" />;
}
