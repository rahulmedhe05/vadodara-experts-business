import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "dry film thickness in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional dry film thickness services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/dry-film-thickness-vadodara" },
  openGraph: {
    title: "dry film thickness in Vadodara | VadodaraExperts",
    description: "Professional dry film thickness services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/dry-film-thickness-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dry-film-thickness-vadodara" />;
}
