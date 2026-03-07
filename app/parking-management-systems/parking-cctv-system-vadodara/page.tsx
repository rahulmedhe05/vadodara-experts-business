import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-management-systems")!;

export const metadata: Metadata = {
  title: "parking CCTV system in Vadodara | Parking Management Systems | VadodaraExperts",
  description: "Professional parking cctv system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-management-systems/parking-cctv-system-vadodara" },
  openGraph: {
    title: "parking CCTV system in Vadodara | VadodaraExperts",
    description: "Professional parking cctv system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-management-systems/parking-cctv-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="parking-cctv-system-vadodara" />;
}
