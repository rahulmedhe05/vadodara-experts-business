import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("aluminium-glass-work")!;

export const metadata: Metadata = {
  title: "Security grille in Vadodara | Aluminium & Glass Work | VadodaraExperts",
  description: "Professional security grille services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/aluminium-glass-work/security-grille-vadodara" },
  openGraph: {
    title: "Security grille in Vadodara | VadodaraExperts",
    description: "Professional security grille services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/aluminium-glass-work/security-grille-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="security-grille-vadodara" />;
}
