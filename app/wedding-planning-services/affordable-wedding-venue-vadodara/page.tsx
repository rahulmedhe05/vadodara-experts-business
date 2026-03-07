import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wedding-planning-services")!;

export const metadata: Metadata = {
  title: "Affordable wedding venue in Vadodara | Wedding Planning Services | VadodaraExperts",
  description: "Professional affordable wedding venue services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wedding-planning-services/affordable-wedding-venue-vadodara" },
  openGraph: {
    title: "Affordable wedding venue in Vadodara | VadodaraExperts",
    description: "Professional affordable wedding venue services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wedding-planning-services/affordable-wedding-venue-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="affordable-wedding-venue-vadodara" />;
}
