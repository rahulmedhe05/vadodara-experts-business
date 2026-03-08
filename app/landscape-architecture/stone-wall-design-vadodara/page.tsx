import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("landscape-architecture")!;

export const metadata: Metadata = {
  title: "Stone wall design in Vadodara | Landscape Architecture | VadodaraExperts",
  description: "Professional stone wall design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/landscape-architecture/stone-wall-design-vadodara" },
  openGraph: {
    title: "Stone wall design in Vadodara | VadodaraExperts",
    description: "Professional stone wall design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/landscape-architecture/stone-wall-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="stone-wall-design-vadodara" />;
}
