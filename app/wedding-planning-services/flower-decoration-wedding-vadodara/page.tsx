import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wedding-planning-services")!;

export const metadata: Metadata = {
  title: "Flower decoration wedding in Vadodara | Wedding Planning Services | VadodaraExperts",
  description: "Professional flower decoration wedding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wedding-planning-services/flower-decoration-wedding-vadodara" },
  openGraph: {
    title: "Flower decoration wedding in Vadodara | VadodaraExperts",
    description: "Professional flower decoration wedding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wedding-planning-services/flower-decoration-wedding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="flower-decoration-wedding-vadodara" />;
}
