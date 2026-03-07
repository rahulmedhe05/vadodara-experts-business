import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("legal-services")!;

export const metadata: Metadata = {
  title: "Agreement drafting in Vadodara | Legal Services | VadodaraExperts",
  description: "Professional agreement drafting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/legal-services/agreement-drafting-vadodara" },
  openGraph: {
    title: "Agreement drafting in Vadodara | VadodaraExperts",
    description: "Professional agreement drafting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/legal-services/agreement-drafting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="agreement-drafting-vadodara" />;
}
