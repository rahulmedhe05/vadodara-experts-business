import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-automation")!;

export const metadata: Metadata = {
  title: "Universal remote system in Vadodara | Smart Home Automation | VadodaraExperts",
  description: "Professional universal remote system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-automation/universal-remote-system-vadodara" },
  openGraph: {
    title: "Universal remote system in Vadodara | VadodaraExperts",
    description: "Professional universal remote system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-automation/universal-remote-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="universal-remote-system-vadodara" />;
}
