import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("marble-granite-services")!;

export const metadata: Metadata = {
  title: "Marble bathtub surround in Vadodara | Marble & Granite Services | VadodaraExperts",
  description: "Professional marble bathtub surround services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/marble-granite-services/marble-bathtub-surround-vadodara" },
  openGraph: {
    title: "Marble bathtub surround in Vadodara | VadodaraExperts",
    description: "Professional marble bathtub surround services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/marble-granite-services/marble-bathtub-surround-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="marble-bathtub-surround-vadodara" />;
}
