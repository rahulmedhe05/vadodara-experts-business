import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("curtain-blinds-installation")!;

export const metadata: Metadata = {
  title: "Thermal curtains in Vadodara | Curtain & Blinds Installation | VadodaraExperts",
  description: "Professional thermal curtains services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/curtain-blinds-installation/thermal-curtains-vadodara" },
  openGraph: {
    title: "Thermal curtains in Vadodara | VadodaraExperts",
    description: "Professional thermal curtains services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/curtain-blinds-installation/thermal-curtains-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="thermal-curtains-vadodara" />;
}
