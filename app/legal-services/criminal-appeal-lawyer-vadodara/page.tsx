import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("legal-services")!;

export const metadata: Metadata = {
  title: "Criminal appeal lawyer in Vadodara | Legal Services | VadodaraExperts",
  description: "Professional criminal appeal lawyer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/legal-services/criminal-appeal-lawyer-vadodara" },
  openGraph: {
    title: "Criminal appeal lawyer in Vadodara | VadodaraExperts",
    description: "Professional criminal appeal lawyer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/legal-services/criminal-appeal-lawyer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="criminal-appeal-lawyer-vadodara" />;
}
