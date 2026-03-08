import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-leasing-consultancy")!;

export const metadata: Metadata = {
  title: "warehouse lease agreement in Vadodara | Warehouse Leasing Consultancy | VadodaraExperts",
  description: "Professional warehouse lease agreement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-leasing-consultancy/warehouse-lease-agreement-vadodara" },
  openGraph: {
    title: "warehouse lease agreement in Vadodara | VadodaraExperts",
    description: "Professional warehouse lease agreement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-leasing-consultancy/warehouse-lease-agreement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="warehouse-lease-agreement-vadodara" />;
}
