import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("geyser-services")!;

export const metadata: Metadata = {
  title: "Geyser spare parts in Vadodara | Geyser Services | VadodaraExperts",
  description: "Professional geyser spare parts services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/geyser-services/geyser-spare-parts-vadodara" },
  openGraph: {
    title: "Geyser spare parts in Vadodara | VadodaraExperts",
    description: "Professional geyser spare parts services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/geyser-services/geyser-spare-parts-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="geyser-spare-parts-vadodara" />;
}
