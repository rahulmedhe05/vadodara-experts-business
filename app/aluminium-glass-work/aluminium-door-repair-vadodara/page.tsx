import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("aluminium-glass-work")!;

export const metadata: Metadata = {
  title: "Aluminium door repair in Vadodara | Aluminium & Glass Work | VadodaraExperts",
  description: "Professional aluminium door repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/aluminium-glass-work/aluminium-door-repair-vadodara" },
  openGraph: {
    title: "Aluminium door repair in Vadodara | VadodaraExperts",
    description: "Professional aluminium door repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/aluminium-glass-work/aluminium-door-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="aluminium-door-repair-vadodara" />;
}
