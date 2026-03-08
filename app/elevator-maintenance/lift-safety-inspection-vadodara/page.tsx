import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("elevator-maintenance")!;

export const metadata: Metadata = {
  title: "lift safety inspection in Vadodara | Elevator Maintenance | VadodaraExperts",
  description: "Professional lift safety inspection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/elevator-maintenance/lift-safety-inspection-vadodara" },
  openGraph: {
    title: "lift safety inspection in Vadodara | VadodaraExperts",
    description: "Professional lift safety inspection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/elevator-maintenance/lift-safety-inspection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lift-safety-inspection-vadodara" />;
}
