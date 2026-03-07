import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("elevator-maintenance")!;

export const metadata: Metadata = {
  title: "hydraulic oil change lift in Vadodara | Elevator Maintenance | VadodaraExperts",
  description: "Professional hydraulic oil change lift services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/elevator-maintenance/hydraulic-oil-change-lift-vadodara" },
  openGraph: {
    title: "hydraulic oil change lift in Vadodara | VadodaraExperts",
    description: "Professional hydraulic oil change lift services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/elevator-maintenance/hydraulic-oil-change-lift-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hydraulic-oil-change-lift-vadodara" />;
}
