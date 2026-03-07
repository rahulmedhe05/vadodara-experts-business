import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-shed-construction")!;

export const metadata: Metadata = {
  title: "insulated roofing factory in Vadodara | Factory Shed Construction | VadodaraExperts",
  description: "Professional insulated roofing factory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-shed-construction/insulated-roofing-factory-vadodara" },
  openGraph: {
    title: "insulated roofing factory in Vadodara | VadodaraExperts",
    description: "Professional insulated roofing factory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-shed-construction/insulated-roofing-factory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="insulated-roofing-factory-vadodara" />;
}
