import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cctv-installation-services")!;

export const metadata: Metadata = {
  title: "CCTV cloud storage in Vadodara | CCTV Installation Services | VadodaraExperts",
  description: "Professional cctv cloud storage services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cctv-installation-services/cctv-cloud-storage-vadodara" },
  openGraph: {
    title: "CCTV cloud storage in Vadodara | VadodaraExperts",
    description: "Professional cctv cloud storage services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cctv-installation-services/cctv-cloud-storage-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cctv-cloud-storage-vadodara" />;
}
