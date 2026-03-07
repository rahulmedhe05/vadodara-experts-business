import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("elevator-maintenance")!;

export const metadata: Metadata = {
  title: "24 hour lift repair in Vadodara | Elevator Maintenance | VadodaraExperts",
  description: "Professional 24 hour lift repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/elevator-maintenance/24-hour-lift-repair-vadodara" },
  openGraph: {
    title: "24 hour lift repair in Vadodara | VadodaraExperts",
    description: "Professional 24 hour lift repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/elevator-maintenance/24-hour-lift-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="24-hour-lift-repair-vadodara" />;
}
