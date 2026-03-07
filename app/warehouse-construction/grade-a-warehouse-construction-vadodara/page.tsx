import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-construction")!;

export const metadata: Metadata = {
  title: "Grade A warehouse construction in Vadodara | Warehouse Construction | VadodaraExperts",
  description: "Professional grade a warehouse construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-construction/grade-a-warehouse-construction-vadodara" },
  openGraph: {
    title: "Grade A warehouse construction in Vadodara | VadodaraExperts",
    description: "Professional grade a warehouse construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-construction/grade-a-warehouse-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="grade-a-warehouse-construction-vadodara" />;
}
