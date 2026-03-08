import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "coating inspector in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional coating inspector services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/coating-inspector-vadodara" },
  openGraph: {
    title: "coating inspector in Vadodara | VadodaraExperts",
    description: "Professional coating inspector services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/coating-inspector-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="coating-inspector-vadodara" />;
}
