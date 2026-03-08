import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("legal-services")!;

export const metadata: Metadata = {
  title: "Court marriage in Vadodara | Legal Services | VadodaraExperts",
  description: "Professional court marriage services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/legal-services/court-marriage-vadodara" },
  openGraph: {
    title: "Court marriage in Vadodara | VadodaraExperts",
    description: "Professional court marriage services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/legal-services/court-marriage-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="court-marriage-vadodara" />;
}
