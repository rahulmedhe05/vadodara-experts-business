import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-renovation-services")!;

export const metadata: Metadata = {
  title: "Fridge PCB repair in Vadodara | Home Renovation Services | VadodaraExperts",
  description: "Professional fridge pcb repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-renovation-services/fridge-pcb-repair-vadodara" },
  openGraph: {
    title: "Fridge PCB repair in Vadodara | VadodaraExperts",
    description: "Professional fridge pcb repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-renovation-services/fridge-pcb-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fridge-pcb-repair-vadodara" />;
}
