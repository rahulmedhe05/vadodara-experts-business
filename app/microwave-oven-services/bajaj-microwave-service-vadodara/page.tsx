import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("microwave-oven-services")!;

export const metadata: Metadata = {
  title: "Bajaj microwave service in Vadodara | Microwave Oven Services | VadodaraExperts",
  description: "Professional bajaj microwave service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/microwave-oven-services/bajaj-microwave-service-vadodara" },
  openGraph: {
    title: "Bajaj microwave service in Vadodara | VadodaraExperts",
    description: "Professional bajaj microwave service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/microwave-oven-services/bajaj-microwave-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bajaj-microwave-service-vadodara" />;
}
