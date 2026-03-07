import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-construction")!;

export const metadata: Metadata = {
  title: "turnkey warehouse construction in Vadodara | Warehouse Construction | VadodaraExperts",
  description: "Professional turnkey warehouse construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-construction/turnkey-warehouse-construction-vadodara" },
  openGraph: {
    title: "turnkey warehouse construction in Vadodara | VadodaraExperts",
    description: "Professional turnkey warehouse construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-construction/turnkey-warehouse-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="turnkey-warehouse-construction-vadodara" />;
}
