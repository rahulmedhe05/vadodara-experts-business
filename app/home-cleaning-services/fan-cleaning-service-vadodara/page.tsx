import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-cleaning-services")!;

export const metadata: Metadata = {
  title: "Fan cleaning service in Vadodara | Home Cleaning Services | VadodaraExperts",
  description: "Professional fan cleaning service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-cleaning-services/fan-cleaning-service-vadodara" },
  openGraph: {
    title: "Fan cleaning service in Vadodara | VadodaraExperts",
    description: "Professional fan cleaning service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-cleaning-services/fan-cleaning-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fan-cleaning-service-vadodara" />;
}
