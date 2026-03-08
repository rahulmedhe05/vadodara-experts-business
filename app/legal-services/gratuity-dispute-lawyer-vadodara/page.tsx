import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("legal-services")!;

export const metadata: Metadata = {
  title: "Gratuity dispute lawyer in Vadodara | Legal Services | VadodaraExperts",
  description: "Professional gratuity dispute lawyer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/legal-services/gratuity-dispute-lawyer-vadodara" },
  openGraph: {
    title: "Gratuity dispute lawyer in Vadodara | VadodaraExperts",
    description: "Professional gratuity dispute lawyer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/legal-services/gratuity-dispute-lawyer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gratuity-dispute-lawyer-vadodara" />;
}
