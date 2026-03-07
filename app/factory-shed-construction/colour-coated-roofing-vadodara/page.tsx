import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-shed-construction")!;

export const metadata: Metadata = {
  title: "colour coated roofing in Vadodara | Factory Shed Construction | VadodaraExperts",
  description: "Professional colour coated roofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-shed-construction/colour-coated-roofing-vadodara" },
  openGraph: {
    title: "colour coated roofing in Vadodara | VadodaraExperts",
    description: "Professional colour coated roofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-shed-construction/colour-coated-roofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="colour-coated-roofing-vadodara" />;
}
