import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cctv-installation-services")!;

export const metadata: Metadata = {
  title: "Home CCTV installation in Vadodara | CCTV Installation Services | VadodaraExperts",
  description: "Professional home cctv installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cctv-installation-services/home-cctv-installation-vadodara" },
  openGraph: {
    title: "Home CCTV installation in Vadodara | VadodaraExperts",
    description: "Professional home cctv installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cctv-installation-services/home-cctv-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="home-cctv-installation-vadodara" />;
}
