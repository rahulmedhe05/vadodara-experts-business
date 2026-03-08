import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("corporate-photography")!;

export const metadata: Metadata = {
  title: "360 degree photography in Vadodara | Corporate Photography | VadodaraExperts",
  description: "Professional 360 degree photography services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/corporate-photography/360-degree-photography-vadodara" },
  openGraph: {
    title: "360 degree photography in Vadodara | VadodaraExperts",
    description: "Professional 360 degree photography services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/corporate-photography/360-degree-photography-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="360-degree-photography-vadodara" />;
}
