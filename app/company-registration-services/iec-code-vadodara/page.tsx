import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("company-registration-services")!;

export const metadata: Metadata = {
  title: "IEC code in Vadodara | Company Registration Services | VadodaraExperts",
  description: "Professional iec code services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/company-registration-services/iec-code-vadodara" },
  openGraph: {
    title: "IEC code in Vadodara | VadodaraExperts",
    description: "Professional iec code services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/company-registration-services/iec-code-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="iec-code-vadodara" />;
}
