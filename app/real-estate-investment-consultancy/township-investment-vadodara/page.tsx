import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-investment-consultancy")!;

export const metadata: Metadata = {
  title: "township investment in Vadodara | Real Estate Investment Consultancy | VadodaraExperts",
  description: "Professional township investment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-investment-consultancy/township-investment-vadodara" },
  openGraph: {
    title: "township investment in Vadodara | VadodaraExperts",
    description: "Professional township investment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-investment-consultancy/township-investment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="township-investment-vadodara" />;
}
