import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("veterinary-clinics")!;

export const metadata: Metadata = {
  title: "critical care vet in Vadodara | Veterinary Clinics | VadodaraExperts",
  description: "Professional critical care vet services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/veterinary-clinics/critical-care-vet-vadodara" },
  openGraph: {
    title: "critical care vet in Vadodara | VadodaraExperts",
    description: "Professional critical care vet services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/veterinary-clinics/critical-care-vet-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="critical-care-vet-vadodara" />;
}
