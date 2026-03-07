import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-maintenance-services")!;

export const metadata: Metadata = {
  title: "Building cleaning in Vadodara | Building Maintenance Services | VadodaraExperts",
  description: "Professional building cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-maintenance-services/building-cleaning-vadodara" },
  openGraph: {
    title: "Building cleaning in Vadodara | VadodaraExperts",
    description: "Professional building cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-maintenance-services/building-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="building-cleaning-vadodara" />;
}
