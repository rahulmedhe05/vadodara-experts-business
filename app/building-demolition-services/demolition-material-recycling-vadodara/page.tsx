import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-demolition-services")!;

export const metadata: Metadata = {
  title: "demolition material recycling in Vadodara | Building Demolition Services | VadodaraExperts",
  description: "Professional demolition material recycling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-demolition-services/demolition-material-recycling-vadodara" },
  openGraph: {
    title: "demolition material recycling in Vadodara | VadodaraExperts",
    description: "Professional demolition material recycling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-demolition-services/demolition-material-recycling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="demolition-material-recycling-vadodara" />;
}
