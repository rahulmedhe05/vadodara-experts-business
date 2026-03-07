import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("aluminium-glass-work")!;

export const metadata: Metadata = {
  title: "Aluminium window seal replacement in Vadodara | Aluminium & Glass Work | VadodaraExperts",
  description: "Professional aluminium window seal replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/aluminium-glass-work/aluminium-window-seal-replacement-vadodara" },
  openGraph: {
    title: "Aluminium window seal replacement in Vadodara | VadodaraExperts",
    description: "Professional aluminium window seal replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/aluminium-glass-work/aluminium-window-seal-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="aluminium-window-seal-replacement-vadodara" />;
}
