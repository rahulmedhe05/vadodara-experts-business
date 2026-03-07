import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("facility-management-services")!;

export const metadata: Metadata = {
  title: "Hostel management in Vadodara | Facility Management Services | VadodaraExperts",
  description: "Professional hostel management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/facility-management-services/hostel-management-vadodara" },
  openGraph: {
    title: "Hostel management in Vadodara | VadodaraExperts",
    description: "Professional hostel management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/facility-management-services/hostel-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hostel-management-vadodara" />;
}
