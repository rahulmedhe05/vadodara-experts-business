import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-logistics-services")!;

export const metadata: Metadata = {
  title: "material handling in Vadodara | Industrial Logistics Services | VadodaraExperts",
  description: "Professional material handling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-logistics-services/material-handling-vadodara" },
  openGraph: {
    title: "material handling in Vadodara | VadodaraExperts",
    description: "Professional material handling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-logistics-services/material-handling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="material-handling-vadodara" />;
}
