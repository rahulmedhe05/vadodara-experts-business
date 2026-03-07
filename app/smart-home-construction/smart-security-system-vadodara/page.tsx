import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-construction")!;

export const metadata: Metadata = {
  title: "smart security system in Vadodara | Smart Home Construction | VadodaraExperts",
  description: "Professional smart security system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-construction/smart-security-system-vadodara" },
  openGraph: {
    title: "smart security system in Vadodara | VadodaraExperts",
    description: "Professional smart security system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-construction/smart-security-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="smart-security-system-vadodara" />;
}
