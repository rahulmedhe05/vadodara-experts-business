import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-renovation-services")!;

export const metadata: Metadata = {
  title: "Fridge performance check in Vadodara | Home Renovation Services | VadodaraExperts",
  description: "Professional fridge performance check services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-renovation-services/fridge-performance-check-vadodara" },
  openGraph: {
    title: "Fridge performance check in Vadodara | VadodaraExperts",
    description: "Professional fridge performance check services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-renovation-services/fridge-performance-check-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fridge-performance-check-vadodara" />;
}
