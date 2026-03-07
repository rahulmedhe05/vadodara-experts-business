import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-renovation-services")!;

export const metadata: Metadata = {
  title: "Residential renovation in Vadodara | Home Renovation Services | VadodaraExperts",
  description: "Professional residential renovation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-renovation-services/residential-renovation-vadodara" },
  openGraph: {
    title: "Residential renovation in Vadodara | VadodaraExperts",
    description: "Professional residential renovation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-renovation-services/residential-renovation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="residential-renovation-vadodara" />;
}
