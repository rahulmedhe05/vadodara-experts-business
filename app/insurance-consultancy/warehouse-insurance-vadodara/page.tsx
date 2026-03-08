import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("insurance-consultancy")!;

export const metadata: Metadata = {
  title: "Warehouse insurance in Vadodara | Insurance Consultancy | VadodaraExperts",
  description: "Professional warehouse insurance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/insurance-consultancy/warehouse-insurance-vadodara" },
  openGraph: {
    title: "Warehouse insurance in Vadodara | VadodaraExperts",
    description: "Professional warehouse insurance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/insurance-consultancy/warehouse-insurance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="warehouse-insurance-vadodara" />;
}
