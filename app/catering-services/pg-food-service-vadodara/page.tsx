import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("catering-services")!;

export const metadata: Metadata = {
  title: "PG food service in Vadodara | Catering Services | VadodaraExperts",
  description: "Professional pg food service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/catering-services/pg-food-service-vadodara" },
  openGraph: {
    title: "PG food service in Vadodara | VadodaraExperts",
    description: "Professional pg food service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/catering-services/pg-food-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pg-food-service-vadodara" />;
}
