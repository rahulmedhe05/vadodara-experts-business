import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cooling-tower-systems")!;

export const metadata: Metadata = {
  title: "200 TR cooling tower in Vadodara | Cooling Tower Systems | VadodaraExperts",
  description: "Professional 200 tr cooling tower services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cooling-tower-systems/200-tr-cooling-tower-vadodara" },
  openGraph: {
    title: "200 TR cooling tower in Vadodara | VadodaraExperts",
    description: "Professional 200 tr cooling tower services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cooling-tower-systems/200-tr-cooling-tower-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="200-tr-cooling-tower-vadodara" />;
}
