import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "Waste to energy in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional waste to energy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/waste-to-energy-vadodara" },
  openGraph: {
    title: "Waste to energy in Vadodara | VadodaraExperts",
    description: "Professional waste to energy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/waste-to-energy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="waste-to-energy-vadodara" />;
}
