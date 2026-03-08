import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-maintenance-services")!;

export const metadata: Metadata = {
  title: "Building energy audit in Vadodara | Building Maintenance Services | VadodaraExperts",
  description: "Professional building energy audit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-maintenance-services/building-energy-audit-vadodara" },
  openGraph: {
    title: "Building energy audit in Vadodara | VadodaraExperts",
    description: "Professional building energy audit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-maintenance-services/building-energy-audit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="building-energy-audit-vadodara" />;
}
