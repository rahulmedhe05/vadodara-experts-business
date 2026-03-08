import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("elevator-maintenance")!;

export const metadata: Metadata = {
  title: "elevator oil change in Vadodara | Elevator Maintenance | VadodaraExperts",
  description: "Professional elevator oil change services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/elevator-maintenance/elevator-oil-change-vadodara" },
  openGraph: {
    title: "elevator oil change in Vadodara | VadodaraExperts",
    description: "Professional elevator oil change services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/elevator-maintenance/elevator-oil-change-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="elevator-oil-change-vadodara" />;
}
