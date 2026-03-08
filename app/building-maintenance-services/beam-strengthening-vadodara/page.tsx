import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-maintenance-services")!;

export const metadata: Metadata = {
  title: "Beam strengthening in Vadodara | Building Maintenance Services | VadodaraExperts",
  description: "Professional beam strengthening services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-maintenance-services/beam-strengthening-vadodara" },
  openGraph: {
    title: "Beam strengthening in Vadodara | VadodaraExperts",
    description: "Professional beam strengthening services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-maintenance-services/beam-strengthening-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="beam-strengthening-vadodara" />;
}
