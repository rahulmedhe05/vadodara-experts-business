import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-investment-consultancy")!;

export const metadata: Metadata = {
  title: "agricultural land investment in Vadodara | Real Estate Investment Consultancy | VadodaraExperts",
  description: "Professional agricultural land investment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-investment-consultancy/agricultural-land-investment-vadodara" },
  openGraph: {
    title: "agricultural land investment in Vadodara | VadodaraExperts",
    description: "Professional agricultural land investment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-investment-consultancy/agricultural-land-investment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="agricultural-land-investment-vadodara" />;
}
