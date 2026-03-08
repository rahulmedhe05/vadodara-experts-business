import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-maintenance-services")!;

export const metadata: Metadata = {
  title: "Road repair society in Vadodara | Building Maintenance Services | VadodaraExperts",
  description: "Professional road repair society services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-maintenance-services/road-repair-society-vadodara" },
  openGraph: {
    title: "Road repair society in Vadodara | VadodaraExperts",
    description: "Professional road repair society services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-maintenance-services/road-repair-society-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="road-repair-society-vadodara" />;
}
