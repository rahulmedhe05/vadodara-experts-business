import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("microwave-oven-services")!;

export const metadata: Metadata = {
  title: "Panasonic microwave service in Vadodara | Microwave Oven Services | VadodaraExperts",
  description: "Professional panasonic microwave service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/microwave-oven-services/panasonic-microwave-service-vadodara" },
  openGraph: {
    title: "Panasonic microwave service in Vadodara | VadodaraExperts",
    description: "Professional panasonic microwave service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/microwave-oven-services/panasonic-microwave-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="panasonic-microwave-service-vadodara" />;
}
