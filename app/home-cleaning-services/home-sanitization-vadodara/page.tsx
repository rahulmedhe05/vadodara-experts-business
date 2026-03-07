import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-cleaning-services")!;

export const metadata: Metadata = {
  title: "Home sanitization in Vadodara | Home Cleaning Services | VadodaraExperts",
  description: "Professional home sanitization services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-cleaning-services/home-sanitization-vadodara" },
  openGraph: {
    title: "Home sanitization in Vadodara | VadodaraExperts",
    description: "Professional home sanitization services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-cleaning-services/home-sanitization-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="home-sanitization-vadodara" />;
}
