import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-legal-advisory")!;

export const metadata: Metadata = {
  title: "will registration in Vadodara | Real Estate Legal Advisory | VadodaraExperts",
  description: "Professional will registration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-legal-advisory/will-registration-vadodara" },
  openGraph: {
    title: "will registration in Vadodara | VadodaraExperts",
    description: "Professional will registration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-legal-advisory/will-registration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="will-registration-vadodara" />;
}
