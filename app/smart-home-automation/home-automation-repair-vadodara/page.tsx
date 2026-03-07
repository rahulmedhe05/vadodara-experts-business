import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-automation")!;

export const metadata: Metadata = {
  title: "Home automation repair in Vadodara | Smart Home Automation | VadodaraExperts",
  description: "Professional home automation repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-automation/home-automation-repair-vadodara" },
  openGraph: {
    title: "Home automation repair in Vadodara | VadodaraExperts",
    description: "Professional home automation repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-automation/home-automation-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="home-automation-repair-vadodara" />;
}
