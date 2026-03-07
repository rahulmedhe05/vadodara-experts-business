import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("iso-certification-consultancy")!;

export const metadata: Metadata = {
  title: "Food safety management in Vadodara | ISO Certification Consultancy | VadodaraExperts",
  description: "Professional food safety management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/iso-certification-consultancy/food-safety-management-vadodara" },
  openGraph: {
    title: "Food safety management in Vadodara | VadodaraExperts",
    description: "Professional food safety management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/iso-certification-consultancy/food-safety-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="food-safety-management-vadodara" />;
}
