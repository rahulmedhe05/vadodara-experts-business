import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-management-services")!;

export const metadata: Metadata = {
  title: "NRI property caretaker in Vadodara | Property Management Services | VadodaraExperts",
  description: "Professional nri property caretaker services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-management-services/nri-property-caretaker-vadodara" },
  openGraph: {
    title: "NRI property caretaker in Vadodara | VadodaraExperts",
    description: "Professional nri property caretaker services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-management-services/nri-property-caretaker-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="nri-property-caretaker-vadodara" />;
}
