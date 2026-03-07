import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("container-house-construction")!;

export const metadata: Metadata = {
  title: "off grid container house in Vadodara | Container House Construction | VadodaraExperts",
  description: "Professional off grid container house services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/container-house-construction/off-grid-container-house-vadodara" },
  openGraph: {
    title: "off grid container house in Vadodara | VadodaraExperts",
    description: "Professional off grid container house services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/container-house-construction/off-grid-container-house-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="off-grid-container-house-vadodara" />;
}
