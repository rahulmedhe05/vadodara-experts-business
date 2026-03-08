import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-services")!;

export const metadata: Metadata = {
  title: "Modular kitchen electrical work in Vadodara | Electrical Services | VadodaraExperts",
  description: "Professional modular kitchen electrical work services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-services/modular-kitchen-electrical-work-vadodara" },
  openGraph: {
    title: "Modular kitchen electrical work in Vadodara | VadodaraExperts",
    description: "Professional modular kitchen electrical work services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-services/modular-kitchen-electrical-work-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="modular-kitchen-electrical-work-vadodara" />;
}
