import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-investment-consultancy")!;

export const metadata: Metadata = {
  title: "joint venture real estate in Vadodara | Real Estate Investment Consultancy | VadodaraExperts",
  description: "Professional joint venture real estate services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-investment-consultancy/joint-venture-real-estate-vadodara" },
  openGraph: {
    title: "joint venture real estate in Vadodara | VadodaraExperts",
    description: "Professional joint venture real estate services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-investment-consultancy/joint-venture-real-estate-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="joint-venture-real-estate-vadodara" />;
}
