import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "Metal scrap recycling in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional metal scrap recycling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/metal-scrap-recycling-vadodara" },
  openGraph: {
    title: "Metal scrap recycling in Vadodara | VadodaraExperts",
    description: "Professional metal scrap recycling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/metal-scrap-recycling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="metal-scrap-recycling-vadodara" />;
}
