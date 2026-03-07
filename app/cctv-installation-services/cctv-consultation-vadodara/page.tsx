import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cctv-installation-services")!;

export const metadata: Metadata = {
  title: "CCTV consultation in Vadodara | CCTV Installation Services | VadodaraExperts",
  description: "Professional cctv consultation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cctv-installation-services/cctv-consultation-vadodara" },
  openGraph: {
    title: "CCTV consultation in Vadodara | VadodaraExperts",
    description: "Professional cctv consultation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cctv-installation-services/cctv-consultation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cctv-consultation-vadodara" />;
}
