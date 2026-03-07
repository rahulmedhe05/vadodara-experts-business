import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("township-development-consultancy")!;

export const metadata: Metadata = {
  title: "IT township in Vadodara | Township Development Consultancy | VadodaraExperts",
  description: "Professional it township services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/township-development-consultancy/it-township-vadodara" },
  openGraph: {
    title: "IT township in Vadodara | VadodaraExperts",
    description: "Professional it township services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/township-development-consultancy/it-township-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="it-township-vadodara" />;
}
