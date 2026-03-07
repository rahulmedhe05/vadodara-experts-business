import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cctv-installation-services")!;

export const metadata: Metadata = {
  title: "Dome camera installation in Vadodara | CCTV Installation Services | VadodaraExperts",
  description: "Professional dome camera installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cctv-installation-services/dome-camera-installation-vadodara" },
  openGraph: {
    title: "Dome camera installation in Vadodara | VadodaraExperts",
    description: "Professional dome camera installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cctv-installation-services/dome-camera-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dome-camera-installation-vadodara" />;
}
