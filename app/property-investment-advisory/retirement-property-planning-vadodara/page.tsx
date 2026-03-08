import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-investment-advisory")!;

export const metadata: Metadata = {
  title: "retirement property planning in Vadodara | Property Investment Advisory | VadodaraExperts",
  description: "Professional retirement property planning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-investment-advisory/retirement-property-planning-vadodara" },
  openGraph: {
    title: "retirement property planning in Vadodara | VadodaraExperts",
    description: "Professional retirement property planning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-investment-advisory/retirement-property-planning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="retirement-property-planning-vadodara" />;
}
