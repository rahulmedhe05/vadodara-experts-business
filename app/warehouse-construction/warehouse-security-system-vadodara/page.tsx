import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-construction")!;

export const metadata: Metadata = {
  title: "warehouse security system in Vadodara | Warehouse Construction | VadodaraExperts",
  description: "Professional warehouse security system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-construction/warehouse-security-system-vadodara" },
  openGraph: {
    title: "warehouse security system in Vadodara | VadodaraExperts",
    description: "Professional warehouse security system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-construction/warehouse-security-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="warehouse-security-system-vadodara" />;
}
