import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("curtain-blinds-installation")!;

export const metadata: Metadata = {
  title: "Door curtains in Vadodara | Curtain & Blinds Installation | VadodaraExperts",
  description: "Professional door curtains services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/curtain-blinds-installation/door-curtains-vadodara" },
  openGraph: {
    title: "Door curtains in Vadodara | VadodaraExperts",
    description: "Professional door curtains services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/curtain-blinds-installation/door-curtains-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="door-curtains-vadodara" />;
}
