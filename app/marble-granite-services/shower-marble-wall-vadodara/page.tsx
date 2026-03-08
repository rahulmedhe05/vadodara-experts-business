import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("marble-granite-services")!;

export const metadata: Metadata = {
  title: "Shower marble wall in Vadodara | Marble & Granite Services | VadodaraExperts",
  description: "Professional shower marble wall services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/marble-granite-services/shower-marble-wall-vadodara" },
  openGraph: {
    title: "Shower marble wall in Vadodara | VadodaraExperts",
    description: "Professional shower marble wall services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/marble-granite-services/shower-marble-wall-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="shower-marble-wall-vadodara" />;
}
