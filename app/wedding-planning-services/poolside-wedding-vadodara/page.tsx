import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wedding-planning-services")!;

export const metadata: Metadata = {
  title: "Poolside wedding in Vadodara | Wedding Planning Services | VadodaraExperts",
  description: "Professional poolside wedding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wedding-planning-services/poolside-wedding-vadodara" },
  openGraph: {
    title: "Poolside wedding in Vadodara | VadodaraExperts",
    description: "Professional poolside wedding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wedding-planning-services/poolside-wedding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="poolside-wedding-vadodara" />;
}
