import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cctv-installation-services")!;

export const metadata: Metadata = {
  title: "CCTV number plate recognition in Vadodara | CCTV Installation Services | VadodaraExperts",
  description: "Professional cctv number plate recognition services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cctv-installation-services/cctv-number-plate-recognition-vadodara" },
  openGraph: {
    title: "CCTV number plate recognition in Vadodara | VadodaraExperts",
    description: "Professional cctv number plate recognition services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cctv-installation-services/cctv-number-plate-recognition-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cctv-number-plate-recognition-vadodara" />;
}
