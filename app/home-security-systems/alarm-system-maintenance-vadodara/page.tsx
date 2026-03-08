import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "Alarm system maintenance in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional alarm system maintenance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/alarm-system-maintenance-vadodara" },
  openGraph: {
    title: "Alarm system maintenance in Vadodara | VadodaraExperts",
    description: "Professional alarm system maintenance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/alarm-system-maintenance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="alarm-system-maintenance-vadodara" />;
}
