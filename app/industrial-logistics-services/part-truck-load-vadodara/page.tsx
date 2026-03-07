import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-logistics-services")!;

export const metadata: Metadata = {
  title: "part truck load in Vadodara | Industrial Logistics Services | VadodaraExperts",
  description: "Professional part truck load services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-logistics-services/part-truck-load-vadodara" },
  openGraph: {
    title: "part truck load in Vadodara | VadodaraExperts",
    description: "Professional part truck load services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-logistics-services/part-truck-load-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="part-truck-load-vadodara" />;
}
