import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "GSM alarm system in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional gsm alarm system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/gsm-alarm-system-vadodara" },
  openGraph: {
    title: "GSM alarm system in Vadodara | VadodaraExperts",
    description: "Professional gsm alarm system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/gsm-alarm-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gsm-alarm-system-vadodara" />;
}
