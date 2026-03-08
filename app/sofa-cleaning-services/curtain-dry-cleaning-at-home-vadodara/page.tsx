import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sofa-cleaning-services")!;

export const metadata: Metadata = {
  title: "Curtain dry cleaning at home in Vadodara | Sofa Cleaning Services | VadodaraExperts",
  description: "Professional curtain dry cleaning at home services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sofa-cleaning-services/curtain-dry-cleaning-at-home-vadodara" },
  openGraph: {
    title: "Curtain dry cleaning at home in Vadodara | VadodaraExperts",
    description: "Professional curtain dry cleaning at home services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sofa-cleaning-services/curtain-dry-cleaning-at-home-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="curtain-dry-cleaning-at-home-vadodara" />;
}
