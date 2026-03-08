import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-automation")!;

export const metadata: Metadata = {
  title: "Havells smart home in Vadodara | Smart Home Automation | VadodaraExperts",
  description: "Professional havells smart home services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-automation/havells-smart-home-vadodara" },
  openGraph: {
    title: "Havells smart home in Vadodara | VadodaraExperts",
    description: "Professional havells smart home services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-automation/havells-smart-home-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="havells-smart-home-vadodara" />;
}
