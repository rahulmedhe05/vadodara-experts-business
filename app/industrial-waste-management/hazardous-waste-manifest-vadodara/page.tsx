import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "Hazardous waste manifest in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional hazardous waste manifest services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/hazardous-waste-manifest-vadodara" },
  openGraph: {
    title: "Hazardous waste manifest in Vadodara | VadodaraExperts",
    description: "Professional hazardous waste manifest services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/hazardous-waste-manifest-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hazardous-waste-manifest-vadodara" />;
}
