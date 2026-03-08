import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("aluminium-glass-work")!;

export const metadata: Metadata = {
  title: "Aluminium tilt and turn window in Vadodara | Aluminium & Glass Work | VadodaraExperts",
  description: "Professional aluminium tilt and turn window services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/aluminium-glass-work/aluminium-tilt-and-turn-window-vadodara" },
  openGraph: {
    title: "Aluminium tilt and turn window in Vadodara | VadodaraExperts",
    description: "Professional aluminium tilt and turn window services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/aluminium-glass-work/aluminium-tilt-and-turn-window-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="aluminium-tilt-and-turn-window-vadodara" />;
}
