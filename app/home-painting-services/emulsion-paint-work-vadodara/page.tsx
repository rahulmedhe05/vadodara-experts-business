import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-painting-services")!;

export const metadata: Metadata = {
  title: "Emulsion paint work in Vadodara | Home Painting Services | VadodaraExperts",
  description: "Professional emulsion paint work services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-painting-services/emulsion-paint-work-vadodara" },
  openGraph: {
    title: "Emulsion paint work in Vadodara | VadodaraExperts",
    description: "Professional emulsion paint work services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-painting-services/emulsion-paint-work-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="emulsion-paint-work-vadodara" />;
}
