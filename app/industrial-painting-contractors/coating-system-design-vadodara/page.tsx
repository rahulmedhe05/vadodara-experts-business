import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "coating system design in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional coating system design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/coating-system-design-vadodara" },
  openGraph: {
    title: "coating system design in Vadodara | VadodaraExperts",
    description: "Professional coating system design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/coating-system-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="coating-system-design-vadodara" />;
}
