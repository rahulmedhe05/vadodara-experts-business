import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-services")!;

export const metadata: Metadata = {
  title: "Exhaust system wiring in Vadodara | Electrical Services | VadodaraExperts",
  description: "Professional exhaust system wiring services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-services/exhaust-system-wiring-vadodara" },
  openGraph: {
    title: "Exhaust system wiring in Vadodara | VadodaraExperts",
    description: "Professional exhaust system wiring services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-services/exhaust-system-wiring-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="exhaust-system-wiring-vadodara" />;
}
