import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "Smart door lock in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional smart door lock services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/smart-door-lock-vadodara" },
  openGraph: {
    title: "Smart door lock in Vadodara | VadodaraExperts",
    description: "Professional smart door lock services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/smart-door-lock-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="smart-door-lock-vadodara" />;
}
