import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wedding-photography")!;

export const metadata: Metadata = {
  title: "Outdoor wedding photography in Vadodara | Wedding Photography | VadodaraExperts",
  description: "Professional outdoor wedding photography services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wedding-photography/outdoor-wedding-photography-vadodara" },
  openGraph: {
    title: "Outdoor wedding photography in Vadodara | VadodaraExperts",
    description: "Professional outdoor wedding photography services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wedding-photography/outdoor-wedding-photography-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="outdoor-wedding-photography-vadodara" />;
}
