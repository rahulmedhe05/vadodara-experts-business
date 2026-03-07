import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("elevator-maintenance")!;

export const metadata: Metadata = {
  title: "lift maintenance company in Vadodara | Elevator Maintenance | VadodaraExperts",
  description: "Professional lift maintenance company services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/elevator-maintenance/lift-maintenance-company-vadodara" },
  openGraph: {
    title: "lift maintenance company in Vadodara | VadodaraExperts",
    description: "Professional lift maintenance company services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/elevator-maintenance/lift-maintenance-company-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lift-maintenance-company-vadodara" />;
}
