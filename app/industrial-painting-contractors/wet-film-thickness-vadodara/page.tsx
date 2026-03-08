import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "wet film thickness in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional wet film thickness services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/wet-film-thickness-vadodara" },
  openGraph: {
    title: "wet film thickness in Vadodara | VadodaraExperts",
    description: "Professional wet film thickness services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/wet-film-thickness-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wet-film-thickness-vadodara" />;
}
