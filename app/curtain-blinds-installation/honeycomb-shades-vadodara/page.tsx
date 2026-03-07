import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("curtain-blinds-installation")!;

export const metadata: Metadata = {
  title: "Honeycomb shades in Vadodara | Curtain & Blinds Installation | VadodaraExperts",
  description: "Professional honeycomb shades services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/curtain-blinds-installation/honeycomb-shades-vadodara" },
  openGraph: {
    title: "Honeycomb shades in Vadodara | VadodaraExperts",
    description: "Professional honeycomb shades services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/curtain-blinds-installation/honeycomb-shades-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="honeycomb-shades-vadodara" />;
}
