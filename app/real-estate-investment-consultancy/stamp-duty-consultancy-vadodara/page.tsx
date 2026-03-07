import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-investment-consultancy")!;

export const metadata: Metadata = {
  title: "stamp duty consultancy in Vadodara | Real Estate Investment Consultancy | VadodaraExperts",
  description: "Professional stamp duty consultancy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-investment-consultancy/stamp-duty-consultancy-vadodara" },
  openGraph: {
    title: "stamp duty consultancy in Vadodara | VadodaraExperts",
    description: "Professional stamp duty consultancy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-investment-consultancy/stamp-duty-consultancy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="stamp-duty-consultancy-vadodara" />;
}
