import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hospital-interior-design")!;

export const metadata: Metadata = {
  title: "hospital medical gas planning in Vadodara | Hospital Interior Design | VadodaraExperts",
  description: "Professional hospital medical gas planning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hospital-interior-design/hospital-medical-gas-planning-vadodara" },
  openGraph: {
    title: "hospital medical gas planning in Vadodara | VadodaraExperts",
    description: "Professional hospital medical gas planning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hospital-interior-design/hospital-medical-gas-planning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hospital-medical-gas-planning-vadodara" />;
}
