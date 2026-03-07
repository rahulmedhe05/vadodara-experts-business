import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("aluminium-glass-work")!;

export const metadata: Metadata = {
  title: "Bullet proof glass in Vadodara | Aluminium & Glass Work | VadodaraExperts",
  description: "Professional bullet proof glass services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/aluminium-glass-work/bullet-proof-glass-vadodara" },
  openGraph: {
    title: "Bullet proof glass in Vadodara | VadodaraExperts",
    description: "Professional bullet proof glass services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/aluminium-glass-work/bullet-proof-glass-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bullet-proof-glass-vadodara" />;
}
