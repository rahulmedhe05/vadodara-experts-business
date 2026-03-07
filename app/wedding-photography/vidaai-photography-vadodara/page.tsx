import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wedding-photography")!;

export const metadata: Metadata = {
  title: "Vidaai photography in Vadodara | Wedding Photography | VadodaraExperts",
  description: "Professional vidaai photography services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wedding-photography/vidaai-photography-vadodara" },
  openGraph: {
    title: "Vidaai photography in Vadodara | VadodaraExperts",
    description: "Professional vidaai photography services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wedding-photography/vidaai-photography-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="vidaai-photography-vadodara" />;
}
