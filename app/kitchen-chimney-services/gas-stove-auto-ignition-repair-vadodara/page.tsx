import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("kitchen-chimney-services")!;

export const metadata: Metadata = {
  title: "Gas stove auto ignition repair in Vadodara | Kitchen Chimney Services | VadodaraExperts",
  description: "Professional gas stove auto ignition repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/kitchen-chimney-services/gas-stove-auto-ignition-repair-vadodara" },
  openGraph: {
    title: "Gas stove auto ignition repair in Vadodara | VadodaraExperts",
    description: "Professional gas stove auto ignition repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/kitchen-chimney-services/gas-stove-auto-ignition-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gas-stove-auto-ignition-repair-vadodara" />;
}
