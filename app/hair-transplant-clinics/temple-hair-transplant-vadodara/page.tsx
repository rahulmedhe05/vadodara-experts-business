import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hair-transplant-clinics")!;

export const metadata: Metadata = {
  title: "Temple hair transplant in Vadodara | Hair Transplant Clinics | VadodaraExperts",
  description: "Professional temple hair transplant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hair-transplant-clinics/temple-hair-transplant-vadodara" },
  openGraph: {
    title: "Temple hair transplant in Vadodara | VadodaraExperts",
    description: "Professional temple hair transplant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hair-transplant-clinics/temple-hair-transplant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="temple-hair-transplant-vadodara" />;
}
