import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-maintenance-services")!;

export const metadata: Metadata = {
  title: "Termite treatment building in Vadodara | Building Maintenance Services | VadodaraExperts",
  description: "Professional termite treatment building services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-maintenance-services/termite-treatment-building-vadodara" },
  openGraph: {
    title: "Termite treatment building in Vadodara | VadodaraExperts",
    description: "Professional termite treatment building services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-maintenance-services/termite-treatment-building-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="termite-treatment-building-vadodara" />;
}
