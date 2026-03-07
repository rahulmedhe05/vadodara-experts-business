import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "intumescent coating in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional intumescent coating services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/intumescent-coating-vadodara" },
  openGraph: {
    title: "intumescent coating in Vadodara | VadodaraExperts",
    description: "Professional intumescent coating services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/intumescent-coating-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="intumescent-coating-vadodara" />;
}
