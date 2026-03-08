import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-maintenance-services")!;

export const metadata: Metadata = {
  title: "Painting touch up in Vadodara | Building Maintenance Services | VadodaraExperts",
  description: "Professional painting touch up services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-maintenance-services/painting-touch-up-vadodara" },
  openGraph: {
    title: "Painting touch up in Vadodara | VadodaraExperts",
    description: "Professional painting touch up services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-maintenance-services/painting-touch-up-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="painting-touch-up-vadodara" />;
}
