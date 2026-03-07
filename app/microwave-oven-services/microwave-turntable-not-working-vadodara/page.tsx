import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("microwave-oven-services")!;

export const metadata: Metadata = {
  title: "Microwave turntable not working in Vadodara | Microwave Oven Services | VadodaraExperts",
  description: "Professional microwave turntable not working services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/microwave-oven-services/microwave-turntable-not-working-vadodara" },
  openGraph: {
    title: "Microwave turntable not working in Vadodara | VadodaraExperts",
    description: "Professional microwave turntable not working services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/microwave-oven-services/microwave-turntable-not-working-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="microwave-turntable-not-working-vadodara" />;
}
