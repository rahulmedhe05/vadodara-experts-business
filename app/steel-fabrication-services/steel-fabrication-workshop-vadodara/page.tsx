import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-fabrication-services")!;

export const metadata: Metadata = {
  title: "steel fabrication workshop in Vadodara | Steel Fabrication Services | VadodaraExperts",
  description: "Professional steel fabrication workshop services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-fabrication-services/steel-fabrication-workshop-vadodara" },
  openGraph: {
    title: "steel fabrication workshop in Vadodara | VadodaraExperts",
    description: "Professional steel fabrication workshop services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-fabrication-services/steel-fabrication-workshop-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="steel-fabrication-workshop-vadodara" />;
}
