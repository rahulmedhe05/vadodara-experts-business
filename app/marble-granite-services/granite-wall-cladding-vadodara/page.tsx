import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("marble-granite-services")!;

export const metadata: Metadata = {
  title: "Granite wall cladding in Vadodara | Marble & Granite Services | VadodaraExperts",
  description: "Professional granite wall cladding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/marble-granite-services/granite-wall-cladding-vadodara" },
  openGraph: {
    title: "Granite wall cladding in Vadodara | VadodaraExperts",
    description: "Professional granite wall cladding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/marble-granite-services/granite-wall-cladding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="granite-wall-cladding-vadodara" />;
}
