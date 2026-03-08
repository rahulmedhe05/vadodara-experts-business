import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("retail-store-interior-design")!;

export const metadata: Metadata = {
  title: "retail space design in Vadodara | Retail Store Interior Design | VadodaraExperts",
  description: "Professional retail space design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/retail-store-interior-design/retail-space-design-vadodara" },
  openGraph: {
    title: "retail space design in Vadodara | VadodaraExperts",
    description: "Professional retail space design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/retail-store-interior-design/retail-space-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="retail-space-design-vadodara" />;
}
