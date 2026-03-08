import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("elevator-maintenance")!;

export const metadata: Metadata = {
  title: "lift rope replacement in Vadodara | Elevator Maintenance | VadodaraExperts",
  description: "Professional lift rope replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/elevator-maintenance/lift-rope-replacement-vadodara" },
  openGraph: {
    title: "lift rope replacement in Vadodara | VadodaraExperts",
    description: "Professional lift rope replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/elevator-maintenance/lift-rope-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lift-rope-replacement-vadodara" />;
}
