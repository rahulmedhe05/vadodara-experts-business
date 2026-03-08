import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("aluminium-glass-work")!;

export const metadata: Metadata = {
  title: "Fire rated glass in Vadodara | Aluminium & Glass Work | VadodaraExperts",
  description: "Professional fire rated glass services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/aluminium-glass-work/fire-rated-glass-vadodara" },
  openGraph: {
    title: "Fire rated glass in Vadodara | VadodaraExperts",
    description: "Professional fire rated glass services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/aluminium-glass-work/fire-rated-glass-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-rated-glass-vadodara" />;
}
