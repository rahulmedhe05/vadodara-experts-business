import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sofa-cleaning-services")!;

export const metadata: Metadata = {
  title: "Lounge furniture cleaning in Vadodara | Sofa Cleaning Services | VadodaraExperts",
  description: "Professional lounge furniture cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sofa-cleaning-services/lounge-furniture-cleaning-vadodara" },
  openGraph: {
    title: "Lounge furniture cleaning in Vadodara | VadodaraExperts",
    description: "Professional lounge furniture cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sofa-cleaning-services/lounge-furniture-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lounge-furniture-cleaning-vadodara" />;
}
