import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("elevator-maintenance")!;

export const metadata: Metadata = {
  title: "panoramic lift maintenance in Vadodara | Elevator Maintenance | VadodaraExperts",
  description: "Professional panoramic lift maintenance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/elevator-maintenance/panoramic-lift-maintenance-vadodara" },
  openGraph: {
    title: "panoramic lift maintenance in Vadodara | VadodaraExperts",
    description: "Professional panoramic lift maintenance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/elevator-maintenance/panoramic-lift-maintenance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="panoramic-lift-maintenance-vadodara" />;
}
