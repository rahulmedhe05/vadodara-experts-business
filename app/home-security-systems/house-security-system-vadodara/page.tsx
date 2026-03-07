import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "House security system in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional house security system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/house-security-system-vadodara" },
  openGraph: {
    title: "House security system in Vadodara | VadodaraExperts",
    description: "Professional house security system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/house-security-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="house-security-system-vadodara" />;
}
