import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-services")!;

export const metadata: Metadata = {
  title: "Kitchen chimney wiring in Vadodara | Electrical Services | VadodaraExperts",
  description: "Professional kitchen chimney wiring services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-services/kitchen-chimney-wiring-vadodara" },
  openGraph: {
    title: "Kitchen chimney wiring in Vadodara | VadodaraExperts",
    description: "Professional kitchen chimney wiring services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-services/kitchen-chimney-wiring-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="kitchen-chimney-wiring-vadodara" />;
}
