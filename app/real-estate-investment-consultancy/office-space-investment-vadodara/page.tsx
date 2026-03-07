import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-investment-consultancy")!;

export const metadata: Metadata = {
  title: "office space investment in Vadodara | Real Estate Investment Consultancy | VadodaraExperts",
  description: "Professional office space investment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-investment-consultancy/office-space-investment-vadodara" },
  openGraph: {
    title: "office space investment in Vadodara | VadodaraExperts",
    description: "Professional office space investment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-investment-consultancy/office-space-investment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="office-space-investment-vadodara" />;
}
