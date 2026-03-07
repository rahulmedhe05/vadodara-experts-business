import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sheet-metal-fabrication")!;

export const metadata: Metadata = {
  title: "hydraulic press brake in Vadodara | Sheet Metal Fabrication | VadodaraExperts",
  description: "Professional hydraulic press brake services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sheet-metal-fabrication/hydraulic-press-brake-vadodara" },
  openGraph: {
    title: "hydraulic press brake in Vadodara | VadodaraExperts",
    description: "Professional hydraulic press brake services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sheet-metal-fabrication/hydraulic-press-brake-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hydraulic-press-brake-vadodara" />;
}
