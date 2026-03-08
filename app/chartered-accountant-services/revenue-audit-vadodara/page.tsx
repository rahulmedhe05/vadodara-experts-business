import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("chartered-accountant-services")!;

export const metadata: Metadata = {
  title: "Revenue audit in Vadodara | Chartered Accountant Services | VadodaraExperts",
  description: "Professional revenue audit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/chartered-accountant-services/revenue-audit-vadodara" },
  openGraph: {
    title: "Revenue audit in Vadodara | VadodaraExperts",
    description: "Professional revenue audit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/chartered-accountant-services/revenue-audit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="revenue-audit-vadodara" />;
}
