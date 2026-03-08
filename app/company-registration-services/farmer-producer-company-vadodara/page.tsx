import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("company-registration-services")!;

export const metadata: Metadata = {
  title: "Farmer producer company in Vadodara | Company Registration Services | VadodaraExperts",
  description: "Professional farmer producer company services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/company-registration-services/farmer-producer-company-vadodara" },
  openGraph: {
    title: "Farmer producer company in Vadodara | VadodaraExperts",
    description: "Professional farmer producer company services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/company-registration-services/farmer-producer-company-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="farmer-producer-company-vadodara" />;
}
