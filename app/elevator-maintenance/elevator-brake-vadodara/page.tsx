import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("elevator-maintenance")!;

export const metadata: Metadata = {
  title: "elevator brake in Vadodara | Elevator Maintenance | VadodaraExperts",
  description: "Professional elevator brake services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/elevator-maintenance/elevator-brake-vadodara" },
  openGraph: {
    title: "elevator brake in Vadodara | VadodaraExperts",
    description: "Professional elevator brake services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/elevator-maintenance/elevator-brake-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="elevator-brake-vadodara" />;
}
