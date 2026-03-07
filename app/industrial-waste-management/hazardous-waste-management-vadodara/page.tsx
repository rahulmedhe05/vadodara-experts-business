import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "Hazardous waste management in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional hazardous waste management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/hazardous-waste-management-vadodara" },
  openGraph: {
    title: "Hazardous waste management in Vadodara | VadodaraExperts",
    description: "Professional hazardous waste management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/hazardous-waste-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hazardous-waste-management-vadodara" />;
}
