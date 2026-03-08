import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hair-transplant-clinics")!;

export const metadata: Metadata = {
  title: "Strip scar camouflage in Vadodara | Hair Transplant Clinics | VadodaraExperts",
  description: "Professional strip scar camouflage services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hair-transplant-clinics/strip-scar-camouflage-vadodara" },
  openGraph: {
    title: "Strip scar camouflage in Vadodara | VadodaraExperts",
    description: "Professional strip scar camouflage services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hair-transplant-clinics/strip-scar-camouflage-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="strip-scar-camouflage-vadodara" />;
}
