import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("inverter-battery-services")!;

export const metadata: Metadata = {
  title: "Inverter fuse replacement in Vadodara | Inverter & Battery Services | VadodaraExperts",
  description: "Professional inverter fuse replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/inverter-battery-services/inverter-fuse-replacement-vadodara" },
  openGraph: {
    title: "Inverter fuse replacement in Vadodara | VadodaraExperts",
    description: "Professional inverter fuse replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/inverter-battery-services/inverter-fuse-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="inverter-fuse-replacement-vadodara" />;
}
