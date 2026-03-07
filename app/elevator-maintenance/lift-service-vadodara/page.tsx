import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("elevator-maintenance")!;

export const metadata: Metadata = {
  title: "lift service in Vadodara | Elevator Maintenance | VadodaraExperts",
  description: "Professional lift service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/elevator-maintenance/lift-service-vadodara" },
  openGraph: {
    title: "lift service in Vadodara | VadodaraExperts",
    description: "Professional lift service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/elevator-maintenance/lift-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lift-service-vadodara" />;
}
