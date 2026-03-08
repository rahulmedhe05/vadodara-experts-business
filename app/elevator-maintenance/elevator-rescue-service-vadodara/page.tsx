import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("elevator-maintenance")!;

export const metadata: Metadata = {
  title: "elevator rescue service in Vadodara | Elevator Maintenance | VadodaraExperts",
  description: "Professional elevator rescue service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/elevator-maintenance/elevator-rescue-service-vadodara" },
  openGraph: {
    title: "elevator rescue service in Vadodara | VadodaraExperts",
    description: "Professional elevator rescue service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/elevator-maintenance/elevator-rescue-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="elevator-rescue-service-vadodara" />;
}
