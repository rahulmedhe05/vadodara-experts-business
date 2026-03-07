import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-project-management")!;

export const metadata: Metadata = {
  title: "construction ERP in Vadodara | Construction Project Management | VadodaraExperts",
  description: "Professional construction erp services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-project-management/construction-erp-vadodara" },
  openGraph: {
    title: "construction ERP in Vadodara | VadodaraExperts",
    description: "Professional construction erp services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-project-management/construction-erp-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="construction-erp-vadodara" />;
}
