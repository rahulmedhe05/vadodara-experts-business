import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("company-registration-services")!;

export const metadata: Metadata = {
  title: "SPICe form filing in Vadodara | Company Registration Services | VadodaraExperts",
  description: "Professional spice form filing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/company-registration-services/spice-form-filing-vadodara" },
  openGraph: {
    title: "SPICe form filing in Vadodara | VadodaraExperts",
    description: "Professional spice form filing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/company-registration-services/spice-form-filing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="spice-form-filing-vadodara" />;
}
