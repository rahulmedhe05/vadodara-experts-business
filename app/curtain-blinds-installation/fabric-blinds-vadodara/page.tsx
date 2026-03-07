import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("curtain-blinds-installation")!;

export const metadata: Metadata = {
  title: "Fabric blinds in Vadodara | Curtain & Blinds Installation | VadodaraExperts",
  description: "Professional fabric blinds services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/curtain-blinds-installation/fabric-blinds-vadodara" },
  openGraph: {
    title: "Fabric blinds in Vadodara | VadodaraExperts",
    description: "Professional fabric blinds services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/curtain-blinds-installation/fabric-blinds-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fabric-blinds-vadodara" />;
}
