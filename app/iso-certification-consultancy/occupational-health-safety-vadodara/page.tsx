import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("iso-certification-consultancy")!;

export const metadata: Metadata = {
  title: "Occupational health safety in Vadodara | ISO Certification Consultancy | VadodaraExperts",
  description: "Professional occupational health safety services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/iso-certification-consultancy/occupational-health-safety-vadodara" },
  openGraph: {
    title: "Occupational health safety in Vadodara | VadodaraExperts",
    description: "Professional occupational health safety services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/iso-certification-consultancy/occupational-health-safety-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="occupational-health-safety-vadodara" />;
}
