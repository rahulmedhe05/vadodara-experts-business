import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-maintenance-services")!;

export const metadata: Metadata = {
  title: "Building exterior painting in Vadodara | Building Maintenance Services | VadodaraExperts",
  description: "Professional building exterior painting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-maintenance-services/building-exterior-painting-vadodara" },
  openGraph: {
    title: "Building exterior painting in Vadodara | VadodaraExperts",
    description: "Professional building exterior painting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-maintenance-services/building-exterior-painting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="building-exterior-painting-vadodara" />;
}
