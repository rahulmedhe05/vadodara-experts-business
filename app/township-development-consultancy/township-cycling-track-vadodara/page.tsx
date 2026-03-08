import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("township-development-consultancy")!;

export const metadata: Metadata = {
  title: "township cycling track in Vadodara | Township Development Consultancy | VadodaraExperts",
  description: "Professional township cycling track services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/township-development-consultancy/township-cycling-track-vadodara" },
  openGraph: {
    title: "township cycling track in Vadodara | VadodaraExperts",
    description: "Professional township cycling track services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/township-development-consultancy/township-cycling-track-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="township-cycling-track-vadodara" />;
}
