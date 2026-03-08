import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hospital-interior-design")!;

export const metadata: Metadata = {
  title: "ayurveda clinic interior in Vadodara | Hospital Interior Design | VadodaraExperts",
  description: "Professional ayurveda clinic interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hospital-interior-design/ayurveda-clinic-interior-vadodara" },
  openGraph: {
    title: "ayurveda clinic interior in Vadodara | VadodaraExperts",
    description: "Professional ayurveda clinic interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hospital-interior-design/ayurveda-clinic-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ayurveda-clinic-interior-vadodara" />;
}
