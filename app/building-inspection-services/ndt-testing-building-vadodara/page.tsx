import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-inspection-services")!;

export const metadata: Metadata = {
  title: "NDT testing building in Vadodara | Building Inspection Services | VadodaraExperts",
  description: "Professional ndt testing building services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-inspection-services/ndt-testing-building-vadodara" },
  openGraph: {
    title: "NDT testing building in Vadodara | VadodaraExperts",
    description: "Professional ndt testing building services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-inspection-services/ndt-testing-building-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ndt-testing-building-vadodara" />;
}
