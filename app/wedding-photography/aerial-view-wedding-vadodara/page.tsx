import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wedding-photography")!;

export const metadata: Metadata = {
  title: "Aerial view wedding in Vadodara | Wedding Photography | VadodaraExperts",
  description: "Professional aerial view wedding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wedding-photography/aerial-view-wedding-vadodara" },
  openGraph: {
    title: "Aerial view wedding in Vadodara | VadodaraExperts",
    description: "Professional aerial view wedding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wedding-photography/aerial-view-wedding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="aerial-view-wedding-vadodara" />;
}
