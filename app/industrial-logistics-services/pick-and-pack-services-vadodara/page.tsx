import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-logistics-services")!;

export const metadata: Metadata = {
  title: "pick and pack services in Vadodara | Industrial Logistics Services | VadodaraExperts",
  description: "Professional pick and pack services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-logistics-services/pick-and-pack-services-vadodara" },
  openGraph: {
    title: "pick and pack services in Vadodara | VadodaraExperts",
    description: "Professional pick and pack services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-logistics-services/pick-and-pack-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pick-and-pack-services-vadodara" />;
}
