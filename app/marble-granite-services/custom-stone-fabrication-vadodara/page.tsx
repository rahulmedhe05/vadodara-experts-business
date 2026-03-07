import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("marble-granite-services")!;

export const metadata: Metadata = {
  title: "Custom stone fabrication in Vadodara | Marble & Granite Services | VadodaraExperts",
  description: "Professional custom stone fabrication services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/marble-granite-services/custom-stone-fabrication-vadodara" },
  openGraph: {
    title: "Custom stone fabrication in Vadodara | VadodaraExperts",
    description: "Professional custom stone fabrication services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/marble-granite-services/custom-stone-fabrication-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="custom-stone-fabrication-vadodara" />;
}
