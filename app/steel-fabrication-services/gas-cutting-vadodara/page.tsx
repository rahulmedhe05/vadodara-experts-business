import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-fabrication-services")!;

export const metadata: Metadata = {
  title: "gas cutting in Vadodara | Steel Fabrication Services | VadodaraExperts",
  description: "Professional gas cutting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-fabrication-services/gas-cutting-vadodara" },
  openGraph: {
    title: "gas cutting in Vadodara | VadodaraExperts",
    description: "Professional gas cutting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-fabrication-services/gas-cutting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gas-cutting-vadodara" />;
}
