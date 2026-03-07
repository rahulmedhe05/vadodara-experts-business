import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-automation-systems")!;

export const metadata: Metadata = {
  title: "KNX system in Vadodara | Building Automation Systems | VadodaraExperts",
  description: "Professional knx system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-automation-systems/knx-system-vadodara" },
  openGraph: {
    title: "KNX system in Vadodara | VadodaraExperts",
    description: "Professional knx system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-automation-systems/knx-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="knx-system-vadodara" />;
}
