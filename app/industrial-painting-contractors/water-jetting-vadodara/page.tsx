import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "water jetting in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional water jetting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/water-jetting-vadodara" },
  openGraph: {
    title: "water jetting in Vadodara | VadodaraExperts",
    description: "Professional water jetting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/water-jetting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-jetting-vadodara" />;
}
