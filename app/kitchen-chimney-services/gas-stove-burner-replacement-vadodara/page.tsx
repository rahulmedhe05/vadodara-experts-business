import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("kitchen-chimney-services")!;

export const metadata: Metadata = {
  title: "Gas stove burner replacement in Vadodara | Kitchen Chimney Services | VadodaraExperts",
  description: "Professional gas stove burner replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/kitchen-chimney-services/gas-stove-burner-replacement-vadodara" },
  openGraph: {
    title: "Gas stove burner replacement in Vadodara | VadodaraExperts",
    description: "Professional gas stove burner replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/kitchen-chimney-services/gas-stove-burner-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gas-stove-burner-replacement-vadodara" />;
}
