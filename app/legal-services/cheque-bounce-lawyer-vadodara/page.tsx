import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("legal-services")!;

export const metadata: Metadata = {
  title: "Cheque bounce lawyer in Vadodara | Legal Services | VadodaraExperts",
  description: "Professional cheque bounce lawyer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/legal-services/cheque-bounce-lawyer-vadodara" },
  openGraph: {
    title: "Cheque bounce lawyer in Vadodara | VadodaraExperts",
    description: "Professional cheque bounce lawyer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/legal-services/cheque-bounce-lawyer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cheque-bounce-lawyer-vadodara" />;
}
