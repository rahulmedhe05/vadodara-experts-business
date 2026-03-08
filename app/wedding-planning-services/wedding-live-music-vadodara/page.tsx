import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wedding-planning-services")!;

export const metadata: Metadata = {
  title: "Wedding live music in Vadodara | Wedding Planning Services | VadodaraExperts",
  description: "Professional wedding live music services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wedding-planning-services/wedding-live-music-vadodara" },
  openGraph: {
    title: "Wedding live music in Vadodara | VadodaraExperts",
    description: "Professional wedding live music services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wedding-planning-services/wedding-live-music-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wedding-live-music-vadodara" />;
}
