import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cooling-tower-systems")!;

export const metadata: Metadata = {
  title: "Legionella prevention in Vadodara | Cooling Tower Systems | VadodaraExperts",
  description: "Professional legionella prevention services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cooling-tower-systems/legionella-prevention-vadodara" },
  openGraph: {
    title: "Legionella prevention in Vadodara | VadodaraExperts",
    description: "Professional legionella prevention services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cooling-tower-systems/legionella-prevention-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="legionella-prevention-vadodara" />;
}
