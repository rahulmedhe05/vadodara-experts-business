import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-construction")!;

export const metadata: Metadata = {
  title: "whole home WiFi in Vadodara | Smart Home Construction | VadodaraExperts",
  description: "Professional whole home wifi services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-construction/whole-home-wifi-vadodara" },
  openGraph: {
    title: "whole home WiFi in Vadodara | VadodaraExperts",
    description: "Professional whole home wifi services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-construction/whole-home-wifi-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="whole-home-wifi-vadodara" />;
}
