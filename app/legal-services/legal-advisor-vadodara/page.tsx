import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("legal-services")!;

export const metadata: Metadata = {
  title: "Legal advisor in Vadodara | Legal Services | VadodaraExperts",
  description: "Professional legal advisor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/legal-services/legal-advisor-vadodara" },
  openGraph: {
    title: "Legal advisor in Vadodara | VadodaraExperts",
    description: "Professional legal advisor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/legal-services/legal-advisor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="legal-advisor-vadodara" />;
}
