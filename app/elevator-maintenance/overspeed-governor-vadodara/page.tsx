import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("elevator-maintenance")!;

export const metadata: Metadata = {
  title: "overspeed governor in Vadodara | Elevator Maintenance | VadodaraExperts",
  description: "Professional overspeed governor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/elevator-maintenance/overspeed-governor-vadodara" },
  openGraph: {
    title: "overspeed governor in Vadodara | VadodaraExperts",
    description: "Professional overspeed governor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/elevator-maintenance/overspeed-governor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="overspeed-governor-vadodara" />;
}
