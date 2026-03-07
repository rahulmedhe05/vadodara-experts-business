import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hair-transplant-clinics")!;

export const metadata: Metadata = {
  title: "Stem cell hair therapy in Vadodara | Hair Transplant Clinics | VadodaraExperts",
  description: "Professional stem cell hair therapy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hair-transplant-clinics/stem-cell-hair-therapy-vadodara" },
  openGraph: {
    title: "Stem cell hair therapy in Vadodara | VadodaraExperts",
    description: "Professional stem cell hair therapy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hair-transplant-clinics/stem-cell-hair-therapy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="stem-cell-hair-therapy-vadodara" />;
}
