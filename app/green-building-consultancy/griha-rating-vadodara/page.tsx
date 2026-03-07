import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "GRIHA rating in Vadodara | Green Building Consultancy | VadodaraExperts",
  description: "Professional griha rating services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy/griha-rating-vadodara" },
  openGraph: {
    title: "GRIHA rating in Vadodara | VadodaraExperts",
    description: "Professional griha rating services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/green-building-consultancy/griha-rating-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="griha-rating-vadodara" />;
}
