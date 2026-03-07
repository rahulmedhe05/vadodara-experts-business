import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-investment-advisory")!;

export const metadata: Metadata = {
  title: "real estate wealth management in Vadodara | Property Investment Advisory | VadodaraExperts",
  description: "Professional real estate wealth management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-investment-advisory/real-estate-wealth-management-vadodara" },
  openGraph: {
    title: "real estate wealth management in Vadodara | VadodaraExperts",
    description: "Professional real estate wealth management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-investment-advisory/real-estate-wealth-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="real-estate-wealth-management-vadodara" />;
}
