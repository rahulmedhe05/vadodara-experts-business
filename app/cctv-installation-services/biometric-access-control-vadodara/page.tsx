import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cctv-installation-services")!;

export const metadata: Metadata = {
  title: "Biometric access control in Vadodara | CCTV Installation Services | VadodaraExperts",
  description: "Professional biometric access control services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cctv-installation-services/biometric-access-control-vadodara" },
  openGraph: {
    title: "Biometric access control in Vadodara | VadodaraExperts",
    description: "Professional biometric access control services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cctv-installation-services/biometric-access-control-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="biometric-access-control-vadodara" />;
}
