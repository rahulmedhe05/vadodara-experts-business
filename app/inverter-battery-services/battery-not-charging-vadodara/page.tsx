import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("inverter-battery-services")!;

export const metadata: Metadata = {
  title: "Battery not charging in Vadodara | Inverter & Battery Services | VadodaraExperts",
  description: "Professional battery not charging services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/inverter-battery-services/battery-not-charging-vadodara" },
  openGraph: {
    title: "Battery not charging in Vadodara | VadodaraExperts",
    description: "Professional battery not charging services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/inverter-battery-services/battery-not-charging-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="battery-not-charging-vadodara" />;
}
