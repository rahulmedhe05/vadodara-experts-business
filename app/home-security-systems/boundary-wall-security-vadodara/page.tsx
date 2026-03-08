import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "Boundary wall security in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional boundary wall security services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/boundary-wall-security-vadodara" },
  openGraph: {
    title: "Boundary wall security in Vadodara | VadodaraExperts",
    description: "Professional boundary wall security services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/boundary-wall-security-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="boundary-wall-security-vadodara" />;
}
