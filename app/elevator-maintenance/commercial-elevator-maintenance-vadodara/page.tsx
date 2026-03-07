import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("elevator-maintenance")!;

export const metadata: Metadata = {
  title: "commercial elevator maintenance in Vadodara | Elevator Maintenance | VadodaraExperts",
  description: "Professional commercial elevator maintenance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/elevator-maintenance/commercial-elevator-maintenance-vadodara" },
  openGraph: {
    title: "commercial elevator maintenance in Vadodara | VadodaraExperts",
    description: "Professional commercial elevator maintenance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/elevator-maintenance/commercial-elevator-maintenance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="commercial-elevator-maintenance-vadodara" />;
}
