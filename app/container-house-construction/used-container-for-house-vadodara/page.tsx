import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("container-house-construction")!;

export const metadata: Metadata = {
  title: "used container for house in Vadodara | Container House Construction | VadodaraExperts",
  description: "Professional used container for house services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/container-house-construction/used-container-for-house-vadodara" },
  openGraph: {
    title: "used container for house in Vadodara | VadodaraExperts",
    description: "Professional used container for house services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/container-house-construction/used-container-for-house-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="used-container-for-house-vadodara" />;
}
