import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "Air pollution control in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional air pollution control services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/air-pollution-control-vadodara" },
  openGraph: {
    title: "Air pollution control in Vadodara | VadodaraExperts",
    description: "Professional air pollution control services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/air-pollution-control-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="air-pollution-control-vadodara" />;
}
