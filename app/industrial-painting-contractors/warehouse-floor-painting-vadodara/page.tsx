import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "warehouse floor painting in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional warehouse floor painting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/warehouse-floor-painting-vadodara" },
  openGraph: {
    title: "warehouse floor painting in Vadodara | VadodaraExperts",
    description: "Professional warehouse floor painting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/warehouse-floor-painting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="warehouse-floor-painting-vadodara" />;
}
