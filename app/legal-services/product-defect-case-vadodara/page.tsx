import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("legal-services")!;

export const metadata: Metadata = {
  title: "Product defect case in Vadodara | Legal Services | VadodaraExperts",
  description: "Professional product defect case services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/legal-services/product-defect-case-vadodara" },
  openGraph: {
    title: "Product defect case in Vadodara | VadodaraExperts",
    description: "Professional product defect case services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/legal-services/product-defect-case-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="product-defect-case-vadodara" />;
}
