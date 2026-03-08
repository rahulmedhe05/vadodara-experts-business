import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("legal-services")!;

export const metadata: Metadata = {
  title: "Bail lawyer in Vadodara | Legal Services | VadodaraExperts",
  description: "Professional bail lawyer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/legal-services/bail-lawyer-vadodara" },
  openGraph: {
    title: "Bail lawyer in Vadodara | VadodaraExperts",
    description: "Professional bail lawyer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/legal-services/bail-lawyer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bail-lawyer-vadodara" />;
}
