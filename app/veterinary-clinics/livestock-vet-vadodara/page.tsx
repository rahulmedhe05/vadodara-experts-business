import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("veterinary-clinics")!;

export const metadata: Metadata = {
  title: "livestock vet in Vadodara | Veterinary Clinics | VadodaraExperts",
  description: "Professional livestock vet services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/veterinary-clinics/livestock-vet-vadodara" },
  openGraph: {
    title: "livestock vet in Vadodara | VadodaraExperts",
    description: "Professional livestock vet services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/veterinary-clinics/livestock-vet-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="livestock-vet-vadodara" />;
}
