import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("legal-services")!;

export const metadata: Metadata = {
  title: "Legal notice drafting in Vadodara | Legal Services | VadodaraExperts",
  description: "Professional legal notice drafting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/legal-services/legal-notice-drafting-vadodara" },
  openGraph: {
    title: "Legal notice drafting in Vadodara | VadodaraExperts",
    description: "Professional legal notice drafting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/legal-services/legal-notice-drafting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="legal-notice-drafting-vadodara" />;
}
