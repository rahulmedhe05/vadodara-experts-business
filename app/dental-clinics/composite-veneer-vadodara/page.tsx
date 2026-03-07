import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dental-clinics")!;

export const metadata: Metadata = {
  title: "Composite veneer in Vadodara | Dental Clinics | VadodaraExperts",
  description: "Professional composite veneer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dental-clinics/composite-veneer-vadodara" },
  openGraph: {
    title: "Composite veneer in Vadodara | VadodaraExperts",
    description: "Professional composite veneer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dental-clinics/composite-veneer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="composite-veneer-vadodara" />;
}
