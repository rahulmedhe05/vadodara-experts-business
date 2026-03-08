import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-construction")!;

export const metadata: Metadata = {
  title: "free span warehouse in Vadodara | Warehouse Construction | VadodaraExperts",
  description: "Professional free span warehouse services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-construction/free-span-warehouse-vadodara" },
  openGraph: {
    title: "free span warehouse in Vadodara | VadodaraExperts",
    description: "Professional free span warehouse services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-construction/free-span-warehouse-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="free-span-warehouse-vadodara" />;
}
