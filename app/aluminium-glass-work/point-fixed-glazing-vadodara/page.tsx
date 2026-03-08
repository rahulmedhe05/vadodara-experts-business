import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("aluminium-glass-work")!;

export const metadata: Metadata = {
  title: "Point fixed glazing in Vadodara | Aluminium & Glass Work | VadodaraExperts",
  description: "Professional point fixed glazing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/aluminium-glass-work/point-fixed-glazing-vadodara" },
  openGraph: {
    title: "Point fixed glazing in Vadodara | VadodaraExperts",
    description: "Professional point fixed glazing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/aluminium-glass-work/point-fixed-glazing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="point-fixed-glazing-vadodara" />;
}
