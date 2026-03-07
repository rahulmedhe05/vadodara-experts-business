import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-investment-consultancy")!;

export const metadata: Metadata = {
  title: "best property investment consultant in Vadodara | Real Estate Investment Consultancy | VadodaraExperts",
  description: "Professional best property investment consultant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-investment-consultancy/best-property-investment-consultant-vadodara" },
  openGraph: {
    title: "best property investment consultant in Vadodara | VadodaraExperts",
    description: "Professional best property investment consultant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-investment-consultancy/best-property-investment-consultant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-property-investment-consultant-vadodara" />;
}
