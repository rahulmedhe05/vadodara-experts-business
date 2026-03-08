import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("company-registration-services")!;

export const metadata: Metadata = {
  title: "Share transfer in Vadodara | Company Registration Services | VadodaraExperts",
  description: "Professional share transfer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/company-registration-services/share-transfer-vadodara" },
  openGraph: {
    title: "Share transfer in Vadodara | VadodaraExperts",
    description: "Professional share transfer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/company-registration-services/share-transfer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="share-transfer-vadodara" />;
}
