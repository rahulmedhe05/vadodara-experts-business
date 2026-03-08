import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("elevator-maintenance")!;

export const metadata: Metadata = {
  title: "lift cabin design in Vadodara | Elevator Maintenance | VadodaraExperts",
  description: "Professional lift cabin design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/elevator-maintenance/lift-cabin-design-vadodara" },
  openGraph: {
    title: "lift cabin design in Vadodara | VadodaraExperts",
    description: "Professional lift cabin design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/elevator-maintenance/lift-cabin-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lift-cabin-design-vadodara" />;
}
