import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("legal-services")!;

export const metadata: Metadata = {
  title: "Lawyer in Vadodara | Legal Services | VadodaraExperts",
  description: "Professional lawyer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/legal-services/lawyer-vadodara" },
  openGraph: {
    title: "Lawyer in Vadodara | VadodaraExperts",
    description: "Professional lawyer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/legal-services/lawyer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lawyer-vadodara" />;
}
