import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cctv-installation-services")!;

export const metadata: Metadata = {
  title: "CCTV mobile app setup in Vadodara | CCTV Installation Services | VadodaraExperts",
  description: "Professional cctv mobile app setup services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cctv-installation-services/cctv-mobile-app-setup-vadodara" },
  openGraph: {
    title: "CCTV mobile app setup in Vadodara | VadodaraExperts",
    description: "Professional cctv mobile app setup services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cctv-installation-services/cctv-mobile-app-setup-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cctv-mobile-app-setup-vadodara" />;
}
