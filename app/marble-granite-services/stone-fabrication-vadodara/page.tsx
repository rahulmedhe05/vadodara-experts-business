import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("marble-granite-services")!;

export const metadata: Metadata = {
  title: "Stone fabrication in Vadodara | Marble & Granite Services | VadodaraExperts",
  description: "Professional stone fabrication services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/marble-granite-services/stone-fabrication-vadodara" },
  openGraph: {
    title: "Stone fabrication in Vadodara | VadodaraExperts",
    description: "Professional stone fabrication services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/marble-granite-services/stone-fabrication-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="stone-fabrication-vadodara" />;
}
