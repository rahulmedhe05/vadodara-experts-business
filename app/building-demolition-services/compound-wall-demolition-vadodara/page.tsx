import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-demolition-services")!;

export const metadata: Metadata = {
  title: "compound wall demolition in Vadodara | Building Demolition Services | VadodaraExperts",
  description: "Professional compound wall demolition services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-demolition-services/compound-wall-demolition-vadodara" },
  openGraph: {
    title: "compound wall demolition in Vadodara | VadodaraExperts",
    description: "Professional compound wall demolition services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-demolition-services/compound-wall-demolition-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="compound-wall-demolition-vadodara" />;
}
