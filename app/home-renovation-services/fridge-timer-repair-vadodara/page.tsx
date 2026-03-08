import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-renovation-services")!;

export const metadata: Metadata = {
  title: "Fridge timer repair in Vadodara | Home Renovation Services | VadodaraExperts",
  description: "Professional fridge timer repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-renovation-services/fridge-timer-repair-vadodara" },
  openGraph: {
    title: "Fridge timer repair in Vadodara | VadodaraExperts",
    description: "Professional fridge timer repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-renovation-services/fridge-timer-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fridge-timer-repair-vadodara" />;
}
