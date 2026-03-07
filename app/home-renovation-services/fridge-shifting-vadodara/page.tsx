import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-renovation-services")!;

export const metadata: Metadata = {
  title: "Fridge shifting in Vadodara | Home Renovation Services | VadodaraExperts",
  description: "Professional fridge shifting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-renovation-services/fridge-shifting-vadodara" },
  openGraph: {
    title: "Fridge shifting in Vadodara | VadodaraExperts",
    description: "Professional fridge shifting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-renovation-services/fridge-shifting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fridge-shifting-vadodara" />;
}
