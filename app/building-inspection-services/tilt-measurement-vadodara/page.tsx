import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-inspection-services")!;

export const metadata: Metadata = {
  title: "tilt measurement in Vadodara | Building Inspection Services | VadodaraExperts",
  description: "Professional tilt measurement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-inspection-services/tilt-measurement-vadodara" },
  openGraph: {
    title: "tilt measurement in Vadodara | VadodaraExperts",
    description: "Professional tilt measurement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-inspection-services/tilt-measurement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tilt-measurement-vadodara" />;
}
