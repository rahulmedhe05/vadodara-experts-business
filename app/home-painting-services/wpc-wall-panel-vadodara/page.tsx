import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-painting-services")!;

export const metadata: Metadata = {
  title: "WPC wall panel in Vadodara | Home Painting Services | VadodaraExperts",
  description: "Professional wpc wall panel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-painting-services/wpc-wall-panel-vadodara" },
  openGraph: {
    title: "WPC wall panel in Vadodara | VadodaraExperts",
    description: "Professional wpc wall panel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-painting-services/wpc-wall-panel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wpc-wall-panel-vadodara" />;
}
