import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("elevator-maintenance")!;

export const metadata: Metadata = {
  title: "lift door replacement in Vadodara | Elevator Maintenance | VadodaraExperts",
  description: "Professional lift door replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/elevator-maintenance/lift-door-replacement-vadodara" },
  openGraph: {
    title: "lift door replacement in Vadodara | VadodaraExperts",
    description: "Professional lift door replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/elevator-maintenance/lift-door-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lift-door-replacement-vadodara" />;
}
