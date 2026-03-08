import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-renovation-services")!;

export const metadata: Metadata = {
  title: "Fridge compressor price in Vadodara | Home Renovation Services | VadodaraExperts",
  description: "Professional fridge compressor price services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-renovation-services/fridge-compressor-price-vadodara" },
  openGraph: {
    title: "Fridge compressor price in Vadodara | VadodaraExperts",
    description: "Professional fridge compressor price services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-renovation-services/fridge-compressor-price-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fridge-compressor-price-vadodara" />;
}
