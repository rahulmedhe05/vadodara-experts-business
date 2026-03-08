import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "Fence alarm system in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional fence alarm system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/fence-alarm-system-vadodara" },
  openGraph: {
    title: "Fence alarm system in Vadodara | VadodaraExperts",
    description: "Professional fence alarm system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/fence-alarm-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fence-alarm-system-vadodara" />;
}
