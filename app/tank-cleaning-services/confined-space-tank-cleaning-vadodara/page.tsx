import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tank-cleaning-services")!;

export const metadata: Metadata = {
  title: "confined space tank cleaning in Vadodara | Tank Cleaning Services | VadodaraExperts",
  description: "Professional confined space tank cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tank-cleaning-services/confined-space-tank-cleaning-vadodara" },
  openGraph: {
    title: "confined space tank cleaning in Vadodara | VadodaraExperts",
    description: "Professional confined space tank cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tank-cleaning-services/confined-space-tank-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="confined-space-tank-cleaning-vadodara" />;
}
