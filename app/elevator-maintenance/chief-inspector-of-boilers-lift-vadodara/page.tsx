import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("elevator-maintenance")!;

export const metadata: Metadata = {
  title: "chief inspector of boilers lift in Vadodara | Elevator Maintenance | VadodaraExperts",
  description: "Professional chief inspector of boilers lift services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/elevator-maintenance/chief-inspector-of-boilers-lift-vadodara" },
  openGraph: {
    title: "chief inspector of boilers lift in Vadodara | VadodaraExperts",
    description: "Professional chief inspector of boilers lift services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/elevator-maintenance/chief-inspector-of-boilers-lift-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chief-inspector-of-boilers-lift-vadodara" />;
}
