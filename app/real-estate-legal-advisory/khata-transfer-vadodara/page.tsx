import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-legal-advisory")!;

export const metadata: Metadata = {
  title: "khata transfer in Vadodara | Real Estate Legal Advisory | VadodaraExperts",
  description: "Professional khata transfer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-legal-advisory/khata-transfer-vadodara" },
  openGraph: {
    title: "khata transfer in Vadodara | VadodaraExperts",
    description: "Professional khata transfer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-legal-advisory/khata-transfer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="khata-transfer-vadodara" />;
}
