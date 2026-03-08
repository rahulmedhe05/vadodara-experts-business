import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("facility-management-services")!;

export const metadata: Metadata = {
  title: "Temporary staffing in Vadodara | Facility Management Services | VadodaraExperts",
  description: "Professional temporary staffing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/facility-management-services/temporary-staffing-vadodara" },
  openGraph: {
    title: "Temporary staffing in Vadodara | VadodaraExperts",
    description: "Professional temporary staffing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/facility-management-services/temporary-staffing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="temporary-staffing-vadodara" />;
}
