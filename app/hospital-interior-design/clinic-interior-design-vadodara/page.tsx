import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hospital-interior-design")!;

export const metadata: Metadata = {
  title: "clinic interior design in Vadodara | Hospital Interior Design | VadodaraExperts",
  description: "Professional clinic interior design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hospital-interior-design/clinic-interior-design-vadodara" },
  openGraph: {
    title: "clinic interior design in Vadodara | VadodaraExperts",
    description: "Professional clinic interior design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hospital-interior-design/clinic-interior-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="clinic-interior-design-vadodara" />;
}
