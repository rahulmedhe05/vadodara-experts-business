import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-fabrication-services")!;

export const metadata: Metadata = {
  title: "best steel fabricator in Vadodara | Steel Fabrication Services | VadodaraExperts",
  description: "Professional best steel fabricator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-fabrication-services/best-steel-fabricator-vadodara" },
  openGraph: {
    title: "best steel fabricator in Vadodara | VadodaraExperts",
    description: "Professional best steel fabricator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-fabrication-services/best-steel-fabricator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-steel-fabricator-vadodara" />;
}
