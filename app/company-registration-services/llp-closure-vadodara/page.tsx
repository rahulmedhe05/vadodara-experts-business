import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("company-registration-services")!;

export const metadata: Metadata = {
  title: "LLP closure in Vadodara | Company Registration Services | VadodaraExperts",
  description: "Professional llp closure services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/company-registration-services/llp-closure-vadodara" },
  openGraph: {
    title: "LLP closure in Vadodara | VadodaraExperts",
    description: "Professional llp closure services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/company-registration-services/llp-closure-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="llp-closure-vadodara" />;
}
