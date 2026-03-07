import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("legal-services")!;

export const metadata: Metadata = {
  title: "Shareholder agreement in Vadodara | Legal Services | VadodaraExperts",
  description: "Professional shareholder agreement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/legal-services/shareholder-agreement-vadodara" },
  openGraph: {
    title: "Shareholder agreement in Vadodara | VadodaraExperts",
    description: "Professional shareholder agreement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/legal-services/shareholder-agreement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="shareholder-agreement-vadodara" />;
}
