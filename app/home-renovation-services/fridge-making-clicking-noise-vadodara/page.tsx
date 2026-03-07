import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-renovation-services")!;

export const metadata: Metadata = {
  title: "Fridge making clicking noise in Vadodara | Home Renovation Services | VadodaraExperts",
  description: "Professional fridge making clicking noise services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-renovation-services/fridge-making-clicking-noise-vadodara" },
  openGraph: {
    title: "Fridge making clicking noise in Vadodara | VadodaraExperts",
    description: "Professional fridge making clicking noise services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-renovation-services/fridge-making-clicking-noise-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fridge-making-clicking-noise-vadodara" />;
}
