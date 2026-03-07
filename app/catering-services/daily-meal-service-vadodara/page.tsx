import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("catering-services")!;

export const metadata: Metadata = {
  title: "Daily meal service in Vadodara | Catering Services | VadodaraExperts",
  description: "Professional daily meal service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/catering-services/daily-meal-service-vadodara" },
  openGraph: {
    title: "Daily meal service in Vadodara | VadodaraExperts",
    description: "Professional daily meal service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/catering-services/daily-meal-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="daily-meal-service-vadodara" />;
}
