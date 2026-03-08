import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wedding-photography")!;

export const metadata: Metadata = {
  title: "Couple shoot in Vadodara | Wedding Photography | VadodaraExperts",
  description: "Professional couple shoot services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wedding-photography/couple-shoot-vadodara" },
  openGraph: {
    title: "Couple shoot in Vadodara | VadodaraExperts",
    description: "Professional couple shoot services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wedding-photography/couple-shoot-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="couple-shoot-vadodara" />;
}
