import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-renovation-services")!;

export const metadata: Metadata = {
  title: "Refrigerator PCB board price in Vadodara | Home Renovation Services | VadodaraExperts",
  description: "Professional refrigerator pcb board price services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-renovation-services/refrigerator-pcb-board-price-vadodara" },
  openGraph: {
    title: "Refrigerator PCB board price in Vadodara | VadodaraExperts",
    description: "Professional refrigerator pcb board price services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-renovation-services/refrigerator-pcb-board-price-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="refrigerator-pcb-board-price-vadodara" />;
}
