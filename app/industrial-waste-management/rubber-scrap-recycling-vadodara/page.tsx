import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "Rubber scrap recycling in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional rubber scrap recycling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/rubber-scrap-recycling-vadodara" },
  openGraph: {
    title: "Rubber scrap recycling in Vadodara | VadodaraExperts",
    description: "Professional rubber scrap recycling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/rubber-scrap-recycling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rubber-scrap-recycling-vadodara" />;
}
