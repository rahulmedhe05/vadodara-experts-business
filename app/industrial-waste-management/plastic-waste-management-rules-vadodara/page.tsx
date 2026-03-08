import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "Plastic waste management rules in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional plastic waste management rules services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/plastic-waste-management-rules-vadodara" },
  openGraph: {
    title: "Plastic waste management rules in Vadodara | VadodaraExperts",
    description: "Professional plastic waste management rules services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/plastic-waste-management-rules-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plastic-waste-management-rules-vadodara" />;
}
