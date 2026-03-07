import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-investment-advisory")!;

export const metadata: Metadata = {
  title: "best property advisor in Vadodara | Property Investment Advisory | VadodaraExperts",
  description: "Professional best property advisor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-investment-advisory/best-property-advisor-vadodara" },
  openGraph: {
    title: "best property advisor in Vadodara | VadodaraExperts",
    description: "Professional best property advisor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-investment-advisory/best-property-advisor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-property-advisor-vadodara" />;
}
