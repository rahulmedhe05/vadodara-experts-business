import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("chartered-accountant-services")!;

export const metadata: Metadata = {
  title: "Cash flow management in Vadodara | Chartered Accountant Services | VadodaraExperts",
  description: "Professional cash flow management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/chartered-accountant-services/cash-flow-management-vadodara" },
  openGraph: {
    title: "Cash flow management in Vadodara | VadodaraExperts",
    description: "Professional cash flow management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/chartered-accountant-services/cash-flow-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cash-flow-management-vadodara" />;
}
