import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("veterinary-clinics")!;

export const metadata: Metadata = {
  title: "veterinary specialist in Vadodara | Veterinary Clinics | VadodaraExperts",
  description: "Professional veterinary specialist services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/veterinary-clinics/veterinary-specialist-vadodara" },
  openGraph: {
    title: "veterinary specialist in Vadodara | VadodaraExperts",
    description: "Professional veterinary specialist services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/veterinary-clinics/veterinary-specialist-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="veterinary-specialist-vadodara" />;
}
