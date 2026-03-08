import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-tank-cleaning")!;

export const metadata: Metadata = {
  title: "Fungus removal water tank in Vadodara | Water Tank Cleaning | VadodaraExperts",
  description: "Professional fungus removal water tank services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-tank-cleaning/fungus-removal-water-tank-vadodara" },
  openGraph: {
    title: "Fungus removal water tank in Vadodara | VadodaraExperts",
    description: "Professional fungus removal water tank services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-tank-cleaning/fungus-removal-water-tank-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fungus-removal-water-tank-vadodara" />;
}
