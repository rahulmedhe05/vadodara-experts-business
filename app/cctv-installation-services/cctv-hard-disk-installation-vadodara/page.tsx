import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cctv-installation-services")!;

export const metadata: Metadata = {
  title: "CCTV hard disk installation in Vadodara | CCTV Installation Services | VadodaraExperts",
  description: "Professional cctv hard disk installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cctv-installation-services/cctv-hard-disk-installation-vadodara" },
  openGraph: {
    title: "CCTV hard disk installation in Vadodara | VadodaraExperts",
    description: "Professional cctv hard disk installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cctv-installation-services/cctv-hard-disk-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cctv-hard-disk-installation-vadodara" />;
}
