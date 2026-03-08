import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-investment-consultancy")!;

export const metadata: Metadata = {
  title: "growth corridor property in Vadodara | Real Estate Investment Consultancy | VadodaraExperts",
  description: "Professional growth corridor property services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-investment-consultancy/growth-corridor-property-vadodara" },
  openGraph: {
    title: "growth corridor property in Vadodara | VadodaraExperts",
    description: "Professional growth corridor property services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-investment-consultancy/growth-corridor-property-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="growth-corridor-property-vadodara" />;
}
