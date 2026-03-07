import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-logistics-services")!;

export const metadata: Metadata = {
  title: "industrial shifting in Vadodara | Industrial Logistics Services | VadodaraExperts",
  description: "Professional industrial shifting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-logistics-services/industrial-shifting-vadodara" },
  openGraph: {
    title: "industrial shifting in Vadodara | VadodaraExperts",
    description: "Professional industrial shifting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-logistics-services/industrial-shifting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-shifting-vadodara" />;
}
