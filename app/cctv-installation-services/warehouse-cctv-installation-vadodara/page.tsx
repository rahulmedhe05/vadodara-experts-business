import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cctv-installation-services")!;

export const metadata: Metadata = {
  title: "Warehouse CCTV installation in Vadodara | CCTV Installation Services | VadodaraExperts",
  description: "Professional warehouse cctv installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cctv-installation-services/warehouse-cctv-installation-vadodara" },
  openGraph: {
    title: "Warehouse CCTV installation in Vadodara | VadodaraExperts",
    description: "Professional warehouse cctv installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cctv-installation-services/warehouse-cctv-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="warehouse-cctv-installation-vadodara" />;
}
