import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mechanical-contractor-services")!;

export const metadata: Metadata = {
  title: "kitchen exhaust system in Vadodara | Mechanical Contractor Services | VadodaraExperts",
  description: "Professional kitchen exhaust system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mechanical-contractor-services/kitchen-exhaust-system-vadodara" },
  openGraph: {
    title: "kitchen exhaust system in Vadodara | VadodaraExperts",
    description: "Professional kitchen exhaust system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mechanical-contractor-services/kitchen-exhaust-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="kitchen-exhaust-system-vadodara" />;
}
