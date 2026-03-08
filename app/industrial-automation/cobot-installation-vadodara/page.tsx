import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-automation")!;

export const metadata: Metadata = {
  title: "cobot installation in Vadodara | Industrial Automation | VadodaraExperts",
  description: "Professional cobot installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-automation/cobot-installation-vadodara" },
  openGraph: {
    title: "cobot installation in Vadodara | VadodaraExperts",
    description: "Professional cobot installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-automation/cobot-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cobot-installation-vadodara" />;
}
