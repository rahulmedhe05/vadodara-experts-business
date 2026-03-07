import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mechanical-contractor-services")!;

export const metadata: Metadata = {
  title: "VRF system installation in Vadodara | Mechanical Contractor Services | VadodaraExperts",
  description: "Professional vrf system installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mechanical-contractor-services/vrf-system-installation-vadodara" },
  openGraph: {
    title: "VRF system installation in Vadodara | VadodaraExperts",
    description: "Professional vrf system installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mechanical-contractor-services/vrf-system-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="vrf-system-installation-vadodara" />;
}
