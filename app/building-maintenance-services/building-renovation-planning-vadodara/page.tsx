import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-maintenance-services")!;

export const metadata: Metadata = {
  title: "Building renovation planning in Vadodara | Building Maintenance Services | VadodaraExperts",
  description: "Professional building renovation planning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-maintenance-services/building-renovation-planning-vadodara" },
  openGraph: {
    title: "Building renovation planning in Vadodara | VadodaraExperts",
    description: "Professional building renovation planning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-maintenance-services/building-renovation-planning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="building-renovation-planning-vadodara" />;
}
