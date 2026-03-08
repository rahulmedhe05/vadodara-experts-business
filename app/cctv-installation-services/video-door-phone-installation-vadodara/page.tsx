import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cctv-installation-services")!;

export const metadata: Metadata = {
  title: "Video door phone installation in Vadodara | CCTV Installation Services | VadodaraExperts",
  description: "Professional video door phone installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cctv-installation-services/video-door-phone-installation-vadodara" },
  openGraph: {
    title: "Video door phone installation in Vadodara | VadodaraExperts",
    description: "Professional video door phone installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cctv-installation-services/video-door-phone-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="video-door-phone-installation-vadodara" />;
}
