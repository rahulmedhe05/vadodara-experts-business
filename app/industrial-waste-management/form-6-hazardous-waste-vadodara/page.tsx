import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "Form 6 hazardous waste in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional form 6 hazardous waste services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/form-6-hazardous-waste-vadodara" },
  openGraph: {
    title: "Form 6 hazardous waste in Vadodara | VadodaraExperts",
    description: "Professional form 6 hazardous waste services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/form-6-hazardous-waste-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="form-6-hazardous-waste-vadodara" />;
}
