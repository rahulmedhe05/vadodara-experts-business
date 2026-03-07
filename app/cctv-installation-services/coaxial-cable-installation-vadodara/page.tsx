import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cctv-installation-services")!;

export const metadata: Metadata = {
  title: "Coaxial cable installation in Vadodara | CCTV Installation Services | VadodaraExperts",
  description: "Professional coaxial cable installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cctv-installation-services/coaxial-cable-installation-vadodara" },
  openGraph: {
    title: "Coaxial cable installation in Vadodara | VadodaraExperts",
    description: "Professional coaxial cable installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cctv-installation-services/coaxial-cable-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="coaxial-cable-installation-vadodara" />;
}
