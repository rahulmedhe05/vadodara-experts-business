import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-services")!;

export const metadata: Metadata = {
  title: "Sewer line cleaning in Vadodara | Plumbing Services | VadodaraExperts",
  description: "Professional sewer line cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-services/sewer-line-cleaning-vadodara" },
  openGraph: {
    title: "Sewer line cleaning in Vadodara | VadodaraExperts",
    description: "Professional sewer line cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-services/sewer-line-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sewer-line-cleaning-vadodara" />;
}
