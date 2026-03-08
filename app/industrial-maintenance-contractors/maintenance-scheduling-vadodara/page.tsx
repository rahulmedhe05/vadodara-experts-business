import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-maintenance-contractors")!;

export const metadata: Metadata = {
  title: "maintenance scheduling in Vadodara | Industrial Maintenance Contractors | VadodaraExperts",
  description: "Professional maintenance scheduling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-maintenance-contractors/maintenance-scheduling-vadodara" },
  openGraph: {
    title: "maintenance scheduling in Vadodara | VadodaraExperts",
    description: "Professional maintenance scheduling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-maintenance-contractors/maintenance-scheduling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="maintenance-scheduling-vadodara" />;
}
