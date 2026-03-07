import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-maintenance-services")!;

export const metadata: Metadata = {
  title: "Elevator safety inspection in Vadodara | Building Maintenance Services | VadodaraExperts",
  description: "Professional elevator safety inspection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-maintenance-services/elevator-safety-inspection-vadodara" },
  openGraph: {
    title: "Elevator safety inspection in Vadodara | VadodaraExperts",
    description: "Professional elevator safety inspection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-maintenance-services/elevator-safety-inspection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="elevator-safety-inspection-vadodara" />;
}
