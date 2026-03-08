import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("microwave-oven-services")!;

export const metadata: Metadata = {
  title: "OTG heating element replacement in Vadodara | Microwave Oven Services | VadodaraExperts",
  description: "Professional otg heating element replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/microwave-oven-services/otg-heating-element-replacement-vadodara" },
  openGraph: {
    title: "OTG heating element replacement in Vadodara | VadodaraExperts",
    description: "Professional otg heating element replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/microwave-oven-services/otg-heating-element-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="otg-heating-element-replacement-vadodara" />;
}
