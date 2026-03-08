import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "marine coating in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional marine coating services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/marine-coating-vadodara" },
  openGraph: {
    title: "marine coating in Vadodara | VadodaraExperts",
    description: "Professional marine coating services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/marine-coating-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="marine-coating-vadodara" />;
}
