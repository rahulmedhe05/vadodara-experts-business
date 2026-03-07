import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("landscape-architecture")!;

export const metadata: Metadata = {
  title: "Permeable paving design in Vadodara | Landscape Architecture | VadodaraExperts",
  description: "Professional permeable paving design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/landscape-architecture/permeable-paving-design-vadodara" },
  openGraph: {
    title: "Permeable paving design in Vadodara | VadodaraExperts",
    description: "Professional permeable paving design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/landscape-architecture/permeable-paving-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="permeable-paving-design-vadodara" />;
}
