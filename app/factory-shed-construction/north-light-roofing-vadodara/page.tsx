import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-shed-construction")!;

export const metadata: Metadata = {
  title: "north light roofing in Vadodara | Factory Shed Construction | VadodaraExperts",
  description: "Professional north light roofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-shed-construction/north-light-roofing-vadodara" },
  openGraph: {
    title: "north light roofing in Vadodara | VadodaraExperts",
    description: "Professional north light roofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-shed-construction/north-light-roofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="north-light-roofing-vadodara" />;
}
