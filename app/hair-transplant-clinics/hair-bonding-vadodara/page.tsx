import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hair-transplant-clinics")!;

export const metadata: Metadata = {
  title: "Hair bonding in Vadodara | Hair Transplant Clinics | VadodaraExperts",
  description: "Professional hair bonding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hair-transplant-clinics/hair-bonding-vadodara" },
  openGraph: {
    title: "Hair bonding in Vadodara | VadodaraExperts",
    description: "Professional hair bonding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hair-transplant-clinics/hair-bonding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hair-bonding-vadodara" />;
}
