import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-investment-advisory")!;

export const metadata: Metadata = {
  title: "under construction investment in Vadodara | Property Investment Advisory | VadodaraExperts",
  description: "Professional under construction investment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-investment-advisory/under-construction-investment-vadodara" },
  openGraph: {
    title: "under construction investment in Vadodara | VadodaraExperts",
    description: "Professional under construction investment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-investment-advisory/under-construction-investment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="under-construction-investment-vadodara" />;
}
