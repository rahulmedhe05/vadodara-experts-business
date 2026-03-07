import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-maintenance-services")!;

export const metadata: Metadata = {
  title: "Wall crack repair in Vadodara | Building Maintenance Services | VadodaraExperts",
  description: "Professional wall crack repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-maintenance-services/wall-crack-repair-vadodara" },
  openGraph: {
    title: "Wall crack repair in Vadodara | VadodaraExperts",
    description: "Professional wall crack repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-maintenance-services/wall-crack-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wall-crack-repair-vadodara" />;
}
