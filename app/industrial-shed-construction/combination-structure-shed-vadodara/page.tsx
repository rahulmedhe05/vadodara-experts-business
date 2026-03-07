import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-shed-construction")!;

export const metadata: Metadata = {
  title: "combination structure shed in Vadodara | Industrial Shed Construction | VadodaraExperts",
  description: "Professional combination structure shed services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-shed-construction/combination-structure-shed-vadodara" },
  openGraph: {
    title: "combination structure shed in Vadodara | VadodaraExperts",
    description: "Professional combination structure shed services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-shed-construction/combination-structure-shed-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="combination-structure-shed-vadodara" />;
}
