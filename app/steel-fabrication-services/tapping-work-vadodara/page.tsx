import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-fabrication-services")!;

export const metadata: Metadata = {
  title: "tapping work in Vadodara | Steel Fabrication Services | VadodaraExperts",
  description: "Professional tapping work services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-fabrication-services/tapping-work-vadodara" },
  openGraph: {
    title: "tapping work in Vadodara | VadodaraExperts",
    description: "Professional tapping work services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-fabrication-services/tapping-work-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tapping-work-vadodara" />;
}
