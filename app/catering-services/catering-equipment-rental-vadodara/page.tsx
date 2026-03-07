import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("catering-services")!;

export const metadata: Metadata = {
  title: "Catering equipment rental in Vadodara | Catering Services | VadodaraExperts",
  description: "Professional catering equipment rental services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/catering-services/catering-equipment-rental-vadodara" },
  openGraph: {
    title: "Catering equipment rental in Vadodara | VadodaraExperts",
    description: "Professional catering equipment rental services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/catering-services/catering-equipment-rental-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="catering-equipment-rental-vadodara" />;
}
