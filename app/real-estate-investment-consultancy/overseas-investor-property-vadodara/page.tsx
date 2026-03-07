import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-investment-consultancy")!;

export const metadata: Metadata = {
  title: "overseas investor property in Vadodara | Real Estate Investment Consultancy | VadodaraExperts",
  description: "Professional overseas investor property services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-investment-consultancy/overseas-investor-property-vadodara" },
  openGraph: {
    title: "overseas investor property in Vadodara | VadodaraExperts",
    description: "Professional overseas investor property services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-investment-consultancy/overseas-investor-property-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="overseas-investor-property-vadodara" />;
}
