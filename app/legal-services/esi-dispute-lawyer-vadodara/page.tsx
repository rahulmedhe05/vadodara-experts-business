import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("legal-services")!;

export const metadata: Metadata = {
  title: "ESI dispute lawyer in Vadodara | Legal Services | VadodaraExperts",
  description: "Professional esi dispute lawyer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/legal-services/esi-dispute-lawyer-vadodara" },
  openGraph: {
    title: "ESI dispute lawyer in Vadodara | VadodaraExperts",
    description: "Professional esi dispute lawyer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/legal-services/esi-dispute-lawyer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="esi-dispute-lawyer-vadodara" />;
}
