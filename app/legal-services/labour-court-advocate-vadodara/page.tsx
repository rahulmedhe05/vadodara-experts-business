import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("legal-services")!;

export const metadata: Metadata = {
  title: "Labour court advocate in Vadodara | Legal Services | VadodaraExperts",
  description: "Professional labour court advocate services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/legal-services/labour-court-advocate-vadodara" },
  openGraph: {
    title: "Labour court advocate in Vadodara | VadodaraExperts",
    description: "Professional labour court advocate services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/legal-services/labour-court-advocate-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="labour-court-advocate-vadodara" />;
}
