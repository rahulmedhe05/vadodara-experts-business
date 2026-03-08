import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("chartered-accountant-services")!;

export const metadata: Metadata = {
  title: "Stock audit in Vadodara | Chartered Accountant Services | VadodaraExperts",
  description: "Professional stock audit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/chartered-accountant-services/stock-audit-vadodara" },
  openGraph: {
    title: "Stock audit in Vadodara | VadodaraExperts",
    description: "Professional stock audit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/chartered-accountant-services/stock-audit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="stock-audit-vadodara" />;
}
