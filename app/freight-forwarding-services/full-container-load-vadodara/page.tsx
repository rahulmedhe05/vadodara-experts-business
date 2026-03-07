import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "Full container load in Vadodara | Freight Forwarding Services | VadodaraExperts",
  description: "Professional full container load services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services/full-container-load-vadodara" },
  openGraph: {
    title: "Full container load in Vadodara | VadodaraExperts",
    description: "Professional full container load services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/freight-forwarding-services/full-container-load-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="full-container-load-vadodara" />;
}
