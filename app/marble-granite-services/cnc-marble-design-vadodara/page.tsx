import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("marble-granite-services")!;

export const metadata: Metadata = {
  title: "CNC marble design in Vadodara | Marble & Granite Services | VadodaraExperts",
  description: "Professional cnc marble design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/marble-granite-services/cnc-marble-design-vadodara" },
  openGraph: {
    title: "CNC marble design in Vadodara | VadodaraExperts",
    description: "Professional cnc marble design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/marble-granite-services/cnc-marble-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cnc-marble-design-vadodara" />;
}
