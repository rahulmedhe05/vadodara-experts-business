import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-leasing-consultancy")!;

export const metadata: Metadata = {
  title: "Grade A warehouse in Vadodara | Warehouse Leasing Consultancy | VadodaraExperts",
  description: "Professional grade a warehouse services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-leasing-consultancy/grade-a-warehouse-vadodara" },
  openGraph: {
    title: "Grade A warehouse in Vadodara | VadodaraExperts",
    description: "Professional grade a warehouse services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-leasing-consultancy/grade-a-warehouse-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="grade-a-warehouse-vadodara" />;
}
