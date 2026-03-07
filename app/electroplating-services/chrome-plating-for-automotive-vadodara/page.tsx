import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electroplating-services")!;

export const metadata: Metadata = {
  title: "chrome plating for automotive in Vadodara | Electroplating Services | VadodaraExperts",
  description: "Professional chrome plating for automotive services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electroplating-services/chrome-plating-for-automotive-vadodara" },
  openGraph: {
    title: "chrome plating for automotive in Vadodara | VadodaraExperts",
    description: "Professional chrome plating for automotive services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electroplating-services/chrome-plating-for-automotive-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chrome-plating-for-automotive-vadodara" />;
}
