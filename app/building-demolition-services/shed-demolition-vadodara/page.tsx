import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-demolition-services")!;

export const metadata: Metadata = {
  title: "shed demolition in Vadodara | Building Demolition Services | VadodaraExperts",
  description: "Professional shed demolition services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-demolition-services/shed-demolition-vadodara" },
  openGraph: {
    title: "shed demolition in Vadodara | VadodaraExperts",
    description: "Professional shed demolition services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-demolition-services/shed-demolition-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="shed-demolition-vadodara" />;
}
