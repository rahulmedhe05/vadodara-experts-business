import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "industrial painting cost in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional industrial painting cost services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/industrial-painting-cost-vadodara" },
  openGraph: {
    title: "industrial painting cost in Vadodara | VadodaraExperts",
    description: "Professional industrial painting cost services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/industrial-painting-cost-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-painting-cost-vadodara" />;
}
