import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "E-waste management rules in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional e-waste management rules services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/e-waste-management-rules-vadodara" },
  openGraph: {
    title: "E-waste management rules in Vadodara | VadodaraExperts",
    description: "Professional e-waste management rules services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/e-waste-management-rules-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="e-waste-management-rules-vadodara" />;
}
