import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hair-transplant-clinics")!;

export const metadata: Metadata = {
  title: "Bio FUE in Vadodara | Hair Transplant Clinics | VadodaraExperts",
  description: "Professional bio fue services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hair-transplant-clinics/bio-fue-vadodara" },
  openGraph: {
    title: "Bio FUE in Vadodara | VadodaraExperts",
    description: "Professional bio fue services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hair-transplant-clinics/bio-fue-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bio-fue-vadodara" />;
}
