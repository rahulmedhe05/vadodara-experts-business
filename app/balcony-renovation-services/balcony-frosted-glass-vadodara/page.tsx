import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("balcony-renovation-services")!;

export const metadata: Metadata = {
  title: "Balcony frosted glass in Vadodara | Balcony Renovation Services | VadodaraExperts",
  description: "Professional balcony frosted glass services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/balcony-renovation-services/balcony-frosted-glass-vadodara" },
  openGraph: {
    title: "Balcony frosted glass in Vadodara | VadodaraExperts",
    description: "Professional balcony frosted glass services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/balcony-renovation-services/balcony-frosted-glass-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="balcony-frosted-glass-vadodara" />;
}
