import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sheet-metal-fabrication")!;

export const metadata: Metadata = {
  title: "turret punching in Vadodara | Sheet Metal Fabrication | VadodaraExperts",
  description: "Professional turret punching services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sheet-metal-fabrication/turret-punching-vadodara" },
  openGraph: {
    title: "turret punching in Vadodara | VadodaraExperts",
    description: "Professional turret punching services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sheet-metal-fabrication/turret-punching-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="turret-punching-vadodara" />;
}
