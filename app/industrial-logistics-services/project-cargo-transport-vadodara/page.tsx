import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-logistics-services")!;

export const metadata: Metadata = {
  title: "project cargo transport in Vadodara | Industrial Logistics Services | VadodaraExperts",
  description: "Professional project cargo transport services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-logistics-services/project-cargo-transport-vadodara" },
  openGraph: {
    title: "project cargo transport in Vadodara | VadodaraExperts",
    description: "Professional project cargo transport services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-logistics-services/project-cargo-transport-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="project-cargo-transport-vadodara" />;
}
