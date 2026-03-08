import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cctv-installation-services")!;

export const metadata: Metadata = {
  title: "Petrol pump CCTV installation in Vadodara | CCTV Installation Services | VadodaraExperts",
  description: "Professional petrol pump cctv installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cctv-installation-services/petrol-pump-cctv-installation-vadodara" },
  openGraph: {
    title: "Petrol pump CCTV installation in Vadodara | VadodaraExperts",
    description: "Professional petrol pump cctv installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cctv-installation-services/petrol-pump-cctv-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="petrol-pump-cctv-installation-vadodara" />;
}
