import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hospital-interior-design")!;

export const metadata: Metadata = {
  title: "dental clinic interior in Vadodara | Hospital Interior Design | VadodaraExperts",
  description: "Professional dental clinic interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hospital-interior-design/dental-clinic-interior-vadodara" },
  openGraph: {
    title: "dental clinic interior in Vadodara | VadodaraExperts",
    description: "Professional dental clinic interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hospital-interior-design/dental-clinic-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dental-clinic-interior-vadodara" />;
}
