import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("elevator-maintenance")!;

export const metadata: Metadata = {
  title: "LOP replacement in Vadodara | Elevator Maintenance | VadodaraExperts",
  description: "Professional lop replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/elevator-maintenance/lop-replacement-vadodara" },
  openGraph: {
    title: "LOP replacement in Vadodara | VadodaraExperts",
    description: "Professional lop replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/elevator-maintenance/lop-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lop-replacement-vadodara" />;
}
