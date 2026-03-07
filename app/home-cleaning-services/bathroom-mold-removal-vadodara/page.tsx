import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-cleaning-services")!;

export const metadata: Metadata = {
  title: "Bathroom mold removal in Vadodara | Home Cleaning Services | VadodaraExperts",
  description: "Professional bathroom mold removal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-cleaning-services/bathroom-mold-removal-vadodara" },
  openGraph: {
    title: "Bathroom mold removal in Vadodara | VadodaraExperts",
    description: "Professional bathroom mold removal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-cleaning-services/bathroom-mold-removal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bathroom-mold-removal-vadodara" />;
}
