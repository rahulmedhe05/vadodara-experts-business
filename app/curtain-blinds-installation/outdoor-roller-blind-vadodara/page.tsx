import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("curtain-blinds-installation")!;

export const metadata: Metadata = {
  title: "Outdoor roller blind in Vadodara | Curtain & Blinds Installation | VadodaraExperts",
  description: "Professional outdoor roller blind services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/curtain-blinds-installation/outdoor-roller-blind-vadodara" },
  openGraph: {
    title: "Outdoor roller blind in Vadodara | VadodaraExperts",
    description: "Professional outdoor roller blind services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/curtain-blinds-installation/outdoor-roller-blind-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="outdoor-roller-blind-vadodara" />;
}
