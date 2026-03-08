import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-maintenance-services")!;

export const metadata: Metadata = {
  title: "Structural audit in Vadodara | Building Maintenance Services | VadodaraExperts",
  description: "Professional structural audit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-maintenance-services/structural-audit-vadodara" },
  openGraph: {
    title: "Structural audit in Vadodara | VadodaraExperts",
    description: "Professional structural audit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-maintenance-services/structural-audit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="structural-audit-vadodara" />;
}
