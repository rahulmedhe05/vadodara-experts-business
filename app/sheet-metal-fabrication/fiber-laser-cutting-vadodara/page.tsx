import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sheet-metal-fabrication")!;

export const metadata: Metadata = {
  title: "fiber laser cutting in Vadodara | Sheet Metal Fabrication | VadodaraExperts",
  description: "Professional fiber laser cutting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sheet-metal-fabrication/fiber-laser-cutting-vadodara" },
  openGraph: {
    title: "fiber laser cutting in Vadodara | VadodaraExperts",
    description: "Professional fiber laser cutting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sheet-metal-fabrication/fiber-laser-cutting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fiber-laser-cutting-vadodara" />;
}
