import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("aluminium-glass-work")!;

export const metadata: Metadata = {
  title: "Glass work in Vadodara | Aluminium & Glass Work | VadodaraExperts",
  description: "Professional glass work services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/aluminium-glass-work/glass-work-vadodara" },
  openGraph: {
    title: "Glass work in Vadodara | VadodaraExperts",
    description: "Professional glass work services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/aluminium-glass-work/glass-work-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="glass-work-vadodara" />;
}
