import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plc-programming-services")!;

export const metadata: Metadata = {
  title: "PLC for water treatment in Vadodara | PLC Programming Services | VadodaraExperts",
  description: "Professional plc for water treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plc-programming-services/plc-for-water-treatment-vadodara" },
  openGraph: {
    title: "PLC for water treatment in Vadodara | VadodaraExperts",
    description: "Professional plc for water treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plc-programming-services/plc-for-water-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plc-for-water-treatment-vadodara" />;
}
