import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-maintenance-services")!;

export const metadata: Metadata = {
  title: "Fire safety audit in Vadodara | Building Maintenance Services | VadodaraExperts",
  description: "Professional fire safety audit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-maintenance-services/fire-safety-audit-vadodara" },
  openGraph: {
    title: "Fire safety audit in Vadodara | VadodaraExperts",
    description: "Professional fire safety audit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-maintenance-services/fire-safety-audit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-safety-audit-vadodara" />;
}
