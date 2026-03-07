import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-renovation-services")!;

export const metadata: Metadata = {
  title: "Hitachi refrigerator service in Vadodara | Home Renovation Services | VadodaraExperts",
  description: "Professional hitachi refrigerator service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-renovation-services/hitachi-refrigerator-service-vadodara" },
  openGraph: {
    title: "Hitachi refrigerator service in Vadodara | VadodaraExperts",
    description: "Professional hitachi refrigerator service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-renovation-services/hitachi-refrigerator-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hitachi-refrigerator-service-vadodara" />;
}
