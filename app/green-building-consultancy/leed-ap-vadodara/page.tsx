import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "LEED AP in Vadodara | Green Building Consultancy | VadodaraExperts",
  description: "Professional leed ap services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy/leed-ap-vadodara" },
  openGraph: {
    title: "LEED AP in Vadodara | VadodaraExperts",
    description: "Professional leed ap services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/green-building-consultancy/leed-ap-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="leed-ap-vadodara" />;
}
