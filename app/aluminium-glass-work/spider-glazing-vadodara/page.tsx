import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("aluminium-glass-work")!;

export const metadata: Metadata = {
  title: "Spider glazing in Vadodara | Aluminium & Glass Work | VadodaraExperts",
  description: "Professional spider glazing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/aluminium-glass-work/spider-glazing-vadodara" },
  openGraph: {
    title: "Spider glazing in Vadodara | VadodaraExperts",
    description: "Professional spider glazing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/aluminium-glass-work/spider-glazing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="spider-glazing-vadodara" />;
}
