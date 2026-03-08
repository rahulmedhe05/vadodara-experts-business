import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cctv-installation-services")!;

export const metadata: Metadata = {
  title: "Smart doorbell installation in Vadodara | CCTV Installation Services | VadodaraExperts",
  description: "Professional smart doorbell installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cctv-installation-services/smart-doorbell-installation-vadodara" },
  openGraph: {
    title: "Smart doorbell installation in Vadodara | VadodaraExperts",
    description: "Professional smart doorbell installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cctv-installation-services/smart-doorbell-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="smart-doorbell-installation-vadodara" />;
}
