import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("township-development-consultancy")!;

export const metadata: Metadata = {
  title: "gated community in Vadodara | Township Development Consultancy | VadodaraExperts",
  description: "Professional gated community services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/township-development-consultancy/gated-community-vadodara" },
  openGraph: {
    title: "gated community in Vadodara | VadodaraExperts",
    description: "Professional gated community services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/township-development-consultancy/gated-community-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gated-community-vadodara" />;
}
