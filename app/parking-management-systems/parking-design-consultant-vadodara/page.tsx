import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-management-systems")!;

export const metadata: Metadata = {
  title: "parking design consultant in Vadodara | Parking Management Systems | VadodaraExperts",
  description: "Professional parking design consultant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-management-systems/parking-design-consultant-vadodara" },
  openGraph: {
    title: "parking design consultant in Vadodara | VadodaraExperts",
    description: "Professional parking design consultant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-management-systems/parking-design-consultant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="parking-design-consultant-vadodara" />;
}
