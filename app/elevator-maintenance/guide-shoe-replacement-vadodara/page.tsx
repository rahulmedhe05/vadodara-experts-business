import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("elevator-maintenance")!;

export const metadata: Metadata = {
  title: "guide shoe replacement in Vadodara | Elevator Maintenance | VadodaraExperts",
  description: "Professional guide shoe replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/elevator-maintenance/guide-shoe-replacement-vadodara" },
  openGraph: {
    title: "guide shoe replacement in Vadodara | VadodaraExperts",
    description: "Professional guide shoe replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/elevator-maintenance/guide-shoe-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="guide-shoe-replacement-vadodara" />;
}
