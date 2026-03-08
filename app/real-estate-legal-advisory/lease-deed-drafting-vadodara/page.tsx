import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-legal-advisory")!;

export const metadata: Metadata = {
  title: "lease deed drafting in Vadodara | Real Estate Legal Advisory | VadodaraExperts",
  description: "Professional lease deed drafting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-legal-advisory/lease-deed-drafting-vadodara" },
  openGraph: {
    title: "lease deed drafting in Vadodara | VadodaraExperts",
    description: "Professional lease deed drafting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-legal-advisory/lease-deed-drafting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lease-deed-drafting-vadodara" />;
}
