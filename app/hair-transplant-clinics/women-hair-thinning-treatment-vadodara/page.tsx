import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hair-transplant-clinics")!;

export const metadata: Metadata = {
  title: "Women hair thinning treatment in Vadodara | Hair Transplant Clinics | VadodaraExperts",
  description: "Professional women hair thinning treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hair-transplant-clinics/women-hair-thinning-treatment-vadodara" },
  openGraph: {
    title: "Women hair thinning treatment in Vadodara | VadodaraExperts",
    description: "Professional women hair thinning treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hair-transplant-clinics/women-hair-thinning-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="women-hair-thinning-treatment-vadodara" />;
}
