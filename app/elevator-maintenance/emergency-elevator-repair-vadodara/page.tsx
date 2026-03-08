import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("elevator-maintenance")!;

export const metadata: Metadata = {
  title: "emergency elevator repair in Vadodara | Elevator Maintenance | VadodaraExperts",
  description: "Professional emergency elevator repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/elevator-maintenance/emergency-elevator-repair-vadodara" },
  openGraph: {
    title: "emergency elevator repair in Vadodara | VadodaraExperts",
    description: "Professional emergency elevator repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/elevator-maintenance/emergency-elevator-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="emergency-elevator-repair-vadodara" />;
}
