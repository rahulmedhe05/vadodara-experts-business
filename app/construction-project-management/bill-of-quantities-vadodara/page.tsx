import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-project-management")!;

export const metadata: Metadata = {
  title: "bill of quantities in Vadodara | Construction Project Management | VadodaraExperts",
  description: "Professional bill of quantities services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-project-management/bill-of-quantities-vadodara" },
  openGraph: {
    title: "bill of quantities in Vadodara | VadodaraExperts",
    description: "Professional bill of quantities services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-project-management/bill-of-quantities-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bill-of-quantities-vadodara" />;
}
