import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-logistics-services")!;

export const metadata: Metadata = {
  title: "inland container depot in Vadodara | Industrial Logistics Services | VadodaraExperts",
  description: "Professional inland container depot services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-logistics-services/inland-container-depot-vadodara" },
  openGraph: {
    title: "inland container depot in Vadodara | VadodaraExperts",
    description: "Professional inland container depot services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-logistics-services/inland-container-depot-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="inland-container-depot-vadodara" />;
}
