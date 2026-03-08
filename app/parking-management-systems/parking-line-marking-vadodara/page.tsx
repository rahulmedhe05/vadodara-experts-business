import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-management-systems")!;

export const metadata: Metadata = {
  title: "parking line marking in Vadodara | Parking Management Systems | VadodaraExperts",
  description: "Professional parking line marking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-management-systems/parking-line-marking-vadodara" },
  openGraph: {
    title: "parking line marking in Vadodara | VadodaraExperts",
    description: "Professional parking line marking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-management-systems/parking-line-marking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="parking-line-marking-vadodara" />;
}
