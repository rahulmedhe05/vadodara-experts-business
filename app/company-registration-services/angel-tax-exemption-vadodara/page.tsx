import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("company-registration-services")!;

export const metadata: Metadata = {
  title: "Angel tax exemption in Vadodara | Company Registration Services | VadodaraExperts",
  description: "Professional angel tax exemption services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/company-registration-services/angel-tax-exemption-vadodara" },
  openGraph: {
    title: "Angel tax exemption in Vadodara | VadodaraExperts",
    description: "Professional angel tax exemption services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/company-registration-services/angel-tax-exemption-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="angel-tax-exemption-vadodara" />;
}
