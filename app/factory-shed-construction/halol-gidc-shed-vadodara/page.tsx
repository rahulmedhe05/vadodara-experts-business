import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-shed-construction")!;

export const metadata: Metadata = {
  title: "Halol GIDC shed in Vadodara | Factory Shed Construction | VadodaraExperts",
  description: "Professional halol gidc shed services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-shed-construction/halol-gidc-shed-vadodara" },
  openGraph: {
    title: "Halol GIDC shed in Vadodara | VadodaraExperts",
    description: "Professional halol gidc shed services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-shed-construction/halol-gidc-shed-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="halol-gidc-shed-vadodara" />;
}
