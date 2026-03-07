import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("marble-granite-services")!;

export const metadata: Metadata = {
  title: "Granite kitchen slab in Vadodara | Marble & Granite Services | VadodaraExperts",
  description: "Professional granite kitchen slab services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/marble-granite-services/granite-kitchen-slab-vadodara" },
  openGraph: {
    title: "Granite kitchen slab in Vadodara | VadodaraExperts",
    description: "Professional granite kitchen slab services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/marble-granite-services/granite-kitchen-slab-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="granite-kitchen-slab-vadodara" />;
}
