import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sofa-cleaning-services")!;

export const metadata: Metadata = {
  title: "Velvet sofa cleaning in Vadodara | Sofa Cleaning Services | VadodaraExperts",
  description: "Professional velvet sofa cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sofa-cleaning-services/velvet-sofa-cleaning-vadodara" },
  openGraph: {
    title: "Velvet sofa cleaning in Vadodara | VadodaraExperts",
    description: "Professional velvet sofa cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sofa-cleaning-services/velvet-sofa-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="velvet-sofa-cleaning-vadodara" />;
}
