import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("curtain-blinds-installation")!;

export const metadata: Metadata = {
  title: "Sheer curtains in Vadodara | Curtain & Blinds Installation | VadodaraExperts",
  description: "Professional sheer curtains services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/curtain-blinds-installation/sheer-curtains-vadodara" },
  openGraph: {
    title: "Sheer curtains in Vadodara | VadodaraExperts",
    description: "Professional sheer curtains services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/curtain-blinds-installation/sheer-curtains-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sheer-curtains-vadodara" />;
}
