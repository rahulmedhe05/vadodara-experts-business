import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pre-wedding-photography")!;

export const metadata: Metadata = {
  title: "Drone couple portrait in Vadodara | Pre-Wedding Photography | VadodaraExperts",
  description: "Professional drone couple portrait services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pre-wedding-photography/drone-couple-portrait-vadodara" },
  openGraph: {
    title: "Drone couple portrait in Vadodara | VadodaraExperts",
    description: "Professional drone couple portrait services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pre-wedding-photography/drone-couple-portrait-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="drone-couple-portrait-vadodara" />;
}
