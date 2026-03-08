import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("elevator-maintenance")!;

export const metadata: Metadata = {
  title: "automatic door elevator in Vadodara | Elevator Maintenance | VadodaraExperts",
  description: "Professional automatic door elevator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/elevator-maintenance/automatic-door-elevator-vadodara" },
  openGraph: {
    title: "automatic door elevator in Vadodara | VadodaraExperts",
    description: "Professional automatic door elevator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/elevator-maintenance/automatic-door-elevator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="automatic-door-elevator-vadodara" />;
}
