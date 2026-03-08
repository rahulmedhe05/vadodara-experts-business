import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-ro-plants")!;

export const metadata: Metadata = {
  title: "RO membrane replacement in Vadodara | Industrial RO Plants | VadodaraExperts",
  description: "Professional ro membrane replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-ro-plants/ro-membrane-replacement-vadodara" },
  openGraph: {
    title: "RO membrane replacement in Vadodara | VadodaraExperts",
    description: "Professional ro membrane replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-ro-plants/ro-membrane-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ro-membrane-replacement-vadodara" />;
}
