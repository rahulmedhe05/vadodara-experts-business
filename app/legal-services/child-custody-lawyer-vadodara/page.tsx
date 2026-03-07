import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("legal-services")!;

export const metadata: Metadata = {
  title: "Child custody lawyer in Vadodara | Legal Services | VadodaraExperts",
  description: "Professional child custody lawyer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/legal-services/child-custody-lawyer-vadodara" },
  openGraph: {
    title: "Child custody lawyer in Vadodara | VadodaraExperts",
    description: "Professional child custody lawyer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/legal-services/child-custody-lawyer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="child-custody-lawyer-vadodara" />;
}
