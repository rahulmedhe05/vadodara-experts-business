import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "water audit green building in Vadodara | Green Building Consultancy | VadodaraExperts",
  description: "Professional water audit green building services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy/water-audit-green-building-vadodara" },
  openGraph: {
    title: "water audit green building in Vadodara | VadodaraExperts",
    description: "Professional water audit green building services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/green-building-consultancy/water-audit-green-building-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-audit-green-building-vadodara" />;
}
