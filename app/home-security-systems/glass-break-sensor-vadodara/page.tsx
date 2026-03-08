import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "Glass break sensor in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional glass break sensor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/glass-break-sensor-vadodara" },
  openGraph: {
    title: "Glass break sensor in Vadodara | VadodaraExperts",
    description: "Professional glass break sensor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/glass-break-sensor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="glass-break-sensor-vadodara" />;
}
