import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sheet-metal-fabrication")!;

export const metadata: Metadata = {
  title: "CO2 laser cutting in Vadodara | Sheet Metal Fabrication | VadodaraExperts",
  description: "Professional co2 laser cutting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sheet-metal-fabrication/co2-laser-cutting-vadodara" },
  openGraph: {
    title: "CO2 laser cutting in Vadodara | VadodaraExperts",
    description: "Professional co2 laser cutting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sheet-metal-fabrication/co2-laser-cutting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="co2-laser-cutting-vadodara" />;
}
