import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sofa-cleaning-services")!;

export const metadata: Metadata = {
  title: "Hospital sofa cleaning in Vadodara | Sofa Cleaning Services | VadodaraExperts",
  description: "Professional hospital sofa cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sofa-cleaning-services/hospital-sofa-cleaning-vadodara" },
  openGraph: {
    title: "Hospital sofa cleaning in Vadodara | VadodaraExperts",
    description: "Professional hospital sofa cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sofa-cleaning-services/hospital-sofa-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hospital-sofa-cleaning-vadodara" />;
}
