import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-investment-consultancy")!;

export const metadata: Metadata = {
  title: "section 54 exemption in Vadodara | Real Estate Investment Consultancy | VadodaraExperts",
  description: "Professional section 54 exemption services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-investment-consultancy/section-54-exemption-vadodara" },
  openGraph: {
    title: "section 54 exemption in Vadodara | VadodaraExperts",
    description: "Professional section 54 exemption services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-investment-consultancy/section-54-exemption-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="section-54-exemption-vadodara" />;
}
