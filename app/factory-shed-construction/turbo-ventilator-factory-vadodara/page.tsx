import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-shed-construction")!;

export const metadata: Metadata = {
  title: "turbo ventilator factory in Vadodara | Factory Shed Construction | VadodaraExperts",
  description: "Professional turbo ventilator factory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-shed-construction/turbo-ventilator-factory-vadodara" },
  openGraph: {
    title: "turbo ventilator factory in Vadodara | VadodaraExperts",
    description: "Professional turbo ventilator factory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-shed-construction/turbo-ventilator-factory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="turbo-ventilator-factory-vadodara" />;
}
