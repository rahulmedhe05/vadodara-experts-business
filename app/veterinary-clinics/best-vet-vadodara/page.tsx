import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("veterinary-clinics")!;

export const metadata: Metadata = {
  title: "best vet in Vadodara | Veterinary Clinics | VadodaraExperts",
  description: "Professional best vet services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/veterinary-clinics/best-vet-vadodara" },
  openGraph: {
    title: "best vet in Vadodara | VadodaraExperts",
    description: "Professional best vet services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/veterinary-clinics/best-vet-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-vet-vadodara" />;
}
