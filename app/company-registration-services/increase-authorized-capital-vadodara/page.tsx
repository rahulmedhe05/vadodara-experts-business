import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("company-registration-services")!;

export const metadata: Metadata = {
  title: "Increase authorized capital in Vadodara | Company Registration Services | VadodaraExperts",
  description: "Professional increase authorized capital services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/company-registration-services/increase-authorized-capital-vadodara" },
  openGraph: {
    title: "Increase authorized capital in Vadodara | VadodaraExperts",
    description: "Professional increase authorized capital services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/company-registration-services/increase-authorized-capital-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="increase-authorized-capital-vadodara" />;
}
