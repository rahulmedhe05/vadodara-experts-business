import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("geyser-services")!;

export const metadata: Metadata = {
  title: "Geyser element replacement in Vadodara | Geyser Services | VadodaraExperts",
  description: "Professional geyser element replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/geyser-services/geyser-element-replacement-vadodara" },
  openGraph: {
    title: "Geyser element replacement in Vadodara | VadodaraExperts",
    description: "Professional geyser element replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/geyser-services/geyser-element-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="geyser-element-replacement-vadodara" />;
}
