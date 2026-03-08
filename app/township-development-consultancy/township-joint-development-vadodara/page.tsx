import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("township-development-consultancy")!;

export const metadata: Metadata = {
  title: "township joint development in Vadodara | Township Development Consultancy | VadodaraExperts",
  description: "Professional township joint development services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/township-development-consultancy/township-joint-development-vadodara" },
  openGraph: {
    title: "township joint development in Vadodara | VadodaraExperts",
    description: "Professional township joint development services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/township-development-consultancy/township-joint-development-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="township-joint-development-vadodara" />;
}
