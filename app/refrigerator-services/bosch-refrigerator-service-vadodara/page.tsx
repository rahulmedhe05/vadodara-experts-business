import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("refrigerator-services")!;

export const metadata: Metadata = {
  title: "Bosch refrigerator service in Vadodara | Refrigerator Services | VadodaraExperts",
  description: "Professional bosch refrigerator service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/refrigerator-services/bosch-refrigerator-service-vadodara" },
  openGraph: {
    title: "Bosch refrigerator service in Vadodara | VadodaraExperts",
    description: "Professional bosch refrigerator service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/refrigerator-services/bosch-refrigerator-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bosch-refrigerator-service-vadodara" />;
}
