import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "PU coating in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional pu coating services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/pu-coating-vadodara" },
  openGraph: {
    title: "PU coating in Vadodara | VadodaraExperts",
    description: "Professional pu coating services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/pu-coating-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pu-coating-vadodara" />;
}
