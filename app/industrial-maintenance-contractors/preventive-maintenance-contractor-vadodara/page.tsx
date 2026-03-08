import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-maintenance-contractors")!;

export const metadata: Metadata = {
  title: "preventive maintenance contractor in Vadodara | Industrial Maintenance Contractors | VadodaraExperts",
  description: "Professional preventive maintenance contractor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-maintenance-contractors/preventive-maintenance-contractor-vadodara" },
  openGraph: {
    title: "preventive maintenance contractor in Vadodara | VadodaraExperts",
    description: "Professional preventive maintenance contractor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-maintenance-contractors/preventive-maintenance-contractor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="preventive-maintenance-contractor-vadodara" />;
}
