import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-investment-advisory")!;

export const metadata: Metadata = {
  title: "government approved valuer in Vadodara | Property Investment Advisory | VadodaraExperts",
  description: "Professional government approved valuer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-investment-advisory/government-approved-valuer-vadodara" },
  openGraph: {
    title: "government approved valuer in Vadodara | VadodaraExperts",
    description: "Professional government approved valuer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-investment-advisory/government-approved-valuer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="government-approved-valuer-vadodara" />;
}
