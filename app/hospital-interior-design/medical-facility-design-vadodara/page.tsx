import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hospital-interior-design")!;

export const metadata: Metadata = {
  title: "medical facility design in Vadodara | Hospital Interior Design | VadodaraExperts",
  description: "Professional medical facility design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hospital-interior-design/medical-facility-design-vadodara" },
  openGraph: {
    title: "medical facility design in Vadodara | VadodaraExperts",
    description: "Professional medical facility design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hospital-interior-design/medical-facility-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="medical-facility-design-vadodara" />;
}
