import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-management-systems")!;

export const metadata: Metadata = {
  title: "parking management cost in Vadodara | Parking Management Systems | VadodaraExperts",
  description: "Professional parking management cost services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-management-systems/parking-management-cost-vadodara" },
  openGraph: {
    title: "parking management cost in Vadodara | VadodaraExperts",
    description: "Professional parking management cost services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-management-systems/parking-management-cost-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="parking-management-cost-vadodara" />;
}
