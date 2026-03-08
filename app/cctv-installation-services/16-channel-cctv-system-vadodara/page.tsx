import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cctv-installation-services")!;

export const metadata: Metadata = {
  title: "16 channel CCTV system in Vadodara | CCTV Installation Services | VadodaraExperts",
  description: "Professional 16 channel cctv system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cctv-installation-services/16-channel-cctv-system-vadodara" },
  openGraph: {
    title: "16 channel CCTV system in Vadodara | VadodaraExperts",
    description: "Professional 16 channel cctv system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cctv-installation-services/16-channel-cctv-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="16-channel-cctv-system-vadodara" />;
}
