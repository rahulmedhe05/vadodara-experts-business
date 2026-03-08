import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("veterinary-clinics")!;

export const metadata: Metadata = {
  title: "online vet consultation in Vadodara | Veterinary Clinics | VadodaraExperts",
  description: "Professional online vet consultation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/veterinary-clinics/online-vet-consultation-vadodara" },
  openGraph: {
    title: "online vet consultation in Vadodara | VadodaraExperts",
    description: "Professional online vet consultation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/veterinary-clinics/online-vet-consultation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="online-vet-consultation-vadodara" />;
}
