import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-system-installation")!;

export const metadata: Metadata = {
  title: "automatic bollard in Vadodara | Parking System Installation | VadodaraExperts",
  description: "Professional automatic bollard services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-system-installation/automatic-bollard-vadodara" },
  openGraph: {
    title: "automatic bollard in Vadodara | VadodaraExperts",
    description: "Professional automatic bollard services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-system-installation/automatic-bollard-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="automatic-bollard-vadodara" />;
}
