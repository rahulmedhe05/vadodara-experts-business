import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-panel-manufacturing")!;

export const metadata: Metadata = {
  title: "bus duct in Vadodara | Electrical Panel Manufacturing | VadodaraExperts",
  description: "Professional bus duct services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-panel-manufacturing/bus-duct-vadodara" },
  openGraph: {
    title: "bus duct in Vadodara | VadodaraExperts",
    description: "Professional bus duct services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-panel-manufacturing/bus-duct-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bus-duct-vadodara" />;
}
