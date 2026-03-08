import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-maintenance-contractors")!;

export const metadata: Metadata = {
  title: "gasket replacement in Vadodara | Industrial Maintenance Contractors | VadodaraExperts",
  description: "Professional gasket replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-maintenance-contractors/gasket-replacement-vadodara" },
  openGraph: {
    title: "gasket replacement in Vadodara | VadodaraExperts",
    description: "Professional gasket replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-maintenance-contractors/gasket-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gasket-replacement-vadodara" />;
}
