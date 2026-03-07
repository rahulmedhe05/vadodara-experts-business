import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hair-transplant-clinics")!;

export const metadata: Metadata = {
  title: "FUT scar repair in Vadodara | Hair Transplant Clinics | VadodaraExperts",
  description: "Professional fut scar repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hair-transplant-clinics/fut-scar-repair-vadodara" },
  openGraph: {
    title: "FUT scar repair in Vadodara | VadodaraExperts",
    description: "Professional fut scar repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hair-transplant-clinics/fut-scar-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fut-scar-repair-vadodara" />;
}
