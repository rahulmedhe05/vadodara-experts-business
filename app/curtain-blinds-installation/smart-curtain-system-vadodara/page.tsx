import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("curtain-blinds-installation")!;

export const metadata: Metadata = {
  title: "Smart curtain system in Vadodara | Curtain & Blinds Installation | VadodaraExperts",
  description: "Professional smart curtain system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/curtain-blinds-installation/smart-curtain-system-vadodara" },
  openGraph: {
    title: "Smart curtain system in Vadodara | VadodaraExperts",
    description: "Professional smart curtain system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/curtain-blinds-installation/smart-curtain-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="smart-curtain-system-vadodara" />;
}
