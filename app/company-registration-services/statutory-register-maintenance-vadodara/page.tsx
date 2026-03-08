import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("company-registration-services")!;

export const metadata: Metadata = {
  title: "Statutory register maintenance in Vadodara | Company Registration Services | VadodaraExperts",
  description: "Professional statutory register maintenance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/company-registration-services/statutory-register-maintenance-vadodara" },
  openGraph: {
    title: "Statutory register maintenance in Vadodara | VadodaraExperts",
    description: "Professional statutory register maintenance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/company-registration-services/statutory-register-maintenance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="statutory-register-maintenance-vadodara" />;
}
