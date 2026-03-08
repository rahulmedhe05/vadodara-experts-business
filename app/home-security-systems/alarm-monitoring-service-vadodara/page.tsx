import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "Alarm monitoring service in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional alarm monitoring service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/alarm-monitoring-service-vadodara" },
  openGraph: {
    title: "Alarm monitoring service in Vadodara | VadodaraExperts",
    description: "Professional alarm monitoring service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/alarm-monitoring-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="alarm-monitoring-service-vadodara" />;
}
