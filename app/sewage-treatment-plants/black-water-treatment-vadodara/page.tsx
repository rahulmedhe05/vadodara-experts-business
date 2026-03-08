import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sewage-treatment-plants")!;

export const metadata: Metadata = {
  title: "black water treatment in Vadodara | Sewage Treatment Plants | VadodaraExperts",
  description: "Professional black water treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sewage-treatment-plants/black-water-treatment-vadodara" },
  openGraph: {
    title: "black water treatment in Vadodara | VadodaraExperts",
    description: "Professional black water treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sewage-treatment-plants/black-water-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="black-water-treatment-vadodara" />;
}
