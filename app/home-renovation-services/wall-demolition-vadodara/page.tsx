import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-renovation-services")!;

export const metadata: Metadata = {
  title: "Wall demolition in Vadodara | Home Renovation Services | VadodaraExperts",
  description: "Professional wall demolition services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-renovation-services/wall-demolition-vadodara" },
  openGraph: {
    title: "Wall demolition in Vadodara | VadodaraExperts",
    description: "Professional wall demolition services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-renovation-services/wall-demolition-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wall-demolition-vadodara" />;
}
