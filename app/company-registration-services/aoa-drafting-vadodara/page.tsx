import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("company-registration-services")!;

export const metadata: Metadata = {
  title: "AOA drafting in Vadodara | Company Registration Services | VadodaraExperts",
  description: "Professional aoa drafting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/company-registration-services/aoa-drafting-vadodara" },
  openGraph: {
    title: "AOA drafting in Vadodara | VadodaraExperts",
    description: "Professional aoa drafting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/company-registration-services/aoa-drafting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="aoa-drafting-vadodara" />;
}
