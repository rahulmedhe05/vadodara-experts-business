import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-automation")!;

export const metadata: Metadata = {
  title: "Home automation company in Vadodara | Smart Home Automation | VadodaraExperts",
  description: "Professional home automation company services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-automation/home-automation-company-vadodara" },
  openGraph: {
    title: "Home automation company in Vadodara | VadodaraExperts",
    description: "Professional home automation company services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-automation/home-automation-company-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="home-automation-company-vadodara" />;
}
