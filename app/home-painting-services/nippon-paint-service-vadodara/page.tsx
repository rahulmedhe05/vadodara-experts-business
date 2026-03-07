import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-painting-services")!;

export const metadata: Metadata = {
  title: "Nippon Paint service in Vadodara | Home Painting Services | VadodaraExperts",
  description: "Professional nippon paint service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-painting-services/nippon-paint-service-vadodara" },
  openGraph: {
    title: "Nippon Paint service in Vadodara | VadodaraExperts",
    description: "Professional nippon paint service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-painting-services/nippon-paint-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="nippon-paint-service-vadodara" />;
}
