import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("terrace-garden-services")!;

export const metadata: Metadata = {
  title: "Terrace interlocking tile in Vadodara | Terrace Garden Services | VadodaraExperts",
  description: "Professional terrace interlocking tile services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/terrace-garden-services/terrace-interlocking-tile-vadodara" },
  openGraph: {
    title: "Terrace interlocking tile in Vadodara | VadodaraExperts",
    description: "Professional terrace interlocking tile services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/terrace-garden-services/terrace-interlocking-tile-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="terrace-interlocking-tile-vadodara" />;
}
