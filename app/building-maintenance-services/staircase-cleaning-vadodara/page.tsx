import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-maintenance-services")!;

export const metadata: Metadata = {
  title: "Staircase cleaning in Vadodara | Building Maintenance Services | VadodaraExperts",
  description: "Professional staircase cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-maintenance-services/staircase-cleaning-vadodara" },
  openGraph: {
    title: "Staircase cleaning in Vadodara | VadodaraExperts",
    description: "Professional staircase cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-maintenance-services/staircase-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="staircase-cleaning-vadodara" />;
}
