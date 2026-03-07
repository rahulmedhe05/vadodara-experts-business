import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-maintenance-services")!;

export const metadata: Metadata = {
  title: "Elevator motor repair in Vadodara | Building Maintenance Services | VadodaraExperts",
  description: "Professional elevator motor repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-maintenance-services/elevator-motor-repair-vadodara" },
  openGraph: {
    title: "Elevator motor repair in Vadodara | VadodaraExperts",
    description: "Professional elevator motor repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-maintenance-services/elevator-motor-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="elevator-motor-repair-vadodara" />;
}
