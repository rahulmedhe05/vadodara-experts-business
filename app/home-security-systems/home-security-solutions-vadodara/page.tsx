import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "Home security solutions in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional home security solutions services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/home-security-solutions-vadodara" },
  openGraph: {
    title: "Home security solutions in Vadodara | VadodaraExperts",
    description: "Professional home security solutions services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/home-security-solutions-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="home-security-solutions-vadodara" />;
}
