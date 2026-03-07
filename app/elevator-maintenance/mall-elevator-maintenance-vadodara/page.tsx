import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("elevator-maintenance")!;

export const metadata: Metadata = {
  title: "mall elevator maintenance in Vadodara | Elevator Maintenance | VadodaraExperts",
  description: "Professional mall elevator maintenance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/elevator-maintenance/mall-elevator-maintenance-vadodara" },
  openGraph: {
    title: "mall elevator maintenance in Vadodara | VadodaraExperts",
    description: "Professional mall elevator maintenance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/elevator-maintenance/mall-elevator-maintenance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mall-elevator-maintenance-vadodara" />;
}
