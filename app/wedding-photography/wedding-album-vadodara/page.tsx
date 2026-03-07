import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wedding-photography")!;

export const metadata: Metadata = {
  title: "Wedding album in Vadodara | Wedding Photography | VadodaraExperts",
  description: "Professional wedding album services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wedding-photography/wedding-album-vadodara" },
  openGraph: {
    title: "Wedding album in Vadodara | VadodaraExperts",
    description: "Professional wedding album services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wedding-photography/wedding-album-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wedding-album-vadodara" />;
}
