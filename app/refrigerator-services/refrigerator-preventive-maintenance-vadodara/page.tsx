import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("refrigerator-services")!;

export const metadata: Metadata = {
  title: "Refrigerator preventive maintenance in Vadodara | Refrigerator Services | VadodaraExperts",
  description: "Professional refrigerator preventive maintenance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/refrigerator-services/refrigerator-preventive-maintenance-vadodara" },
  openGraph: {
    title: "Refrigerator preventive maintenance in Vadodara | VadodaraExperts",
    description: "Professional refrigerator preventive maintenance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/refrigerator-services/refrigerator-preventive-maintenance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="refrigerator-preventive-maintenance-vadodara" />;
}
