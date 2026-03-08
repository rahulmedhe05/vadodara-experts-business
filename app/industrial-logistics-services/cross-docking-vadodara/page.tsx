import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-logistics-services")!;

export const metadata: Metadata = {
  title: "cross docking in Vadodara | Industrial Logistics Services | VadodaraExperts",
  description: "Professional cross docking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-logistics-services/cross-docking-vadodara" },
  openGraph: {
    title: "cross docking in Vadodara | VadodaraExperts",
    description: "Professional cross docking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-logistics-services/cross-docking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cross-docking-vadodara" />;
}
