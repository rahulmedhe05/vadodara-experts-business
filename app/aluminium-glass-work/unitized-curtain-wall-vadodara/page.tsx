import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("aluminium-glass-work")!;

export const metadata: Metadata = {
  title: "Unitized curtain wall in Vadodara | Aluminium & Glass Work | VadodaraExperts",
  description: "Professional unitized curtain wall services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/aluminium-glass-work/unitized-curtain-wall-vadodara" },
  openGraph: {
    title: "Unitized curtain wall in Vadodara | VadodaraExperts",
    description: "Professional unitized curtain wall services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/aluminium-glass-work/unitized-curtain-wall-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="unitized-curtain-wall-vadodara" />;
}
