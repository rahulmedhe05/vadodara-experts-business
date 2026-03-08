import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-services")!;

export const metadata: Metadata = {
  title: "Home automation wiring in Vadodara | Electrical Services | VadodaraExperts",
  description: "Professional home automation wiring services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-services/home-automation-wiring-vadodara" },
  openGraph: {
    title: "Home automation wiring in Vadodara | VadodaraExperts",
    description: "Professional home automation wiring services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-services/home-automation-wiring-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="home-automation-wiring-vadodara" />;
}
