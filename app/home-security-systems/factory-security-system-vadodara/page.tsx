import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "Factory security system in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional factory security system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/factory-security-system-vadodara" },
  openGraph: {
    title: "Factory security system in Vadodara | VadodaraExperts",
    description: "Professional factory security system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/factory-security-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-security-system-vadodara" />;
}
