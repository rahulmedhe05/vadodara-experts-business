import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cctv-installation-services")!;

export const metadata: Metadata = {
  title: "CCTV hard disk replacement in Vadodara | CCTV Installation Services | VadodaraExperts",
  description: "Professional cctv hard disk replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cctv-installation-services/cctv-hard-disk-replacement-vadodara" },
  openGraph: {
    title: "CCTV hard disk replacement in Vadodara | VadodaraExperts",
    description: "Professional cctv hard disk replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cctv-installation-services/cctv-hard-disk-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cctv-hard-disk-replacement-vadodara" />;
}
