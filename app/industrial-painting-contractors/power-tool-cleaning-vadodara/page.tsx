import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "power tool cleaning in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional power tool cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/power-tool-cleaning-vadodara" },
  openGraph: {
    title: "power tool cleaning in Vadodara | VadodaraExperts",
    description: "Professional power tool cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/power-tool-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="power-tool-cleaning-vadodara" />;
}
