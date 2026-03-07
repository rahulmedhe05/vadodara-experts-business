import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("landscape-architecture")!;

export const metadata: Metadata = {
  title: "Healing garden design in Vadodara | Landscape Architecture | VadodaraExperts",
  description: "Professional healing garden design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/landscape-architecture/healing-garden-design-vadodara" },
  openGraph: {
    title: "Healing garden design in Vadodara | VadodaraExperts",
    description: "Professional healing garden design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/landscape-architecture/healing-garden-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="healing-garden-design-vadodara" />;
}
