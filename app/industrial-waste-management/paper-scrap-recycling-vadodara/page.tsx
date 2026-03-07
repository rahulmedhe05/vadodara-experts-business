import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "Paper scrap recycling in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional paper scrap recycling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/paper-scrap-recycling-vadodara" },
  openGraph: {
    title: "Paper scrap recycling in Vadodara | VadodaraExperts",
    description: "Professional paper scrap recycling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/paper-scrap-recycling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="paper-scrap-recycling-vadodara" />;
}
