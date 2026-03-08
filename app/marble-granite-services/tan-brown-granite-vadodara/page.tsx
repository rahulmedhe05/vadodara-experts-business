import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("marble-granite-services")!;

export const metadata: Metadata = {
  title: "Tan brown granite in Vadodara | Marble & Granite Services | VadodaraExperts",
  description: "Professional tan brown granite services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/marble-granite-services/tan-brown-granite-vadodara" },
  openGraph: {
    title: "Tan brown granite in Vadodara | VadodaraExperts",
    description: "Professional tan brown granite services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/marble-granite-services/tan-brown-granite-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tan-brown-granite-vadodara" />;
}
