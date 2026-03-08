import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-investment-consultancy")!;

export const metadata: Metadata = {
  title: "SIP in real estate in Vadodara | Real Estate Investment Consultancy | VadodaraExperts",
  description: "Professional sip in real estate services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-investment-consultancy/sip-in-real-estate-vadodara" },
  openGraph: {
    title: "SIP in real estate in Vadodara | VadodaraExperts",
    description: "Professional sip in real estate services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-investment-consultancy/sip-in-real-estate-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sip-in-real-estate-vadodara" />;
}
