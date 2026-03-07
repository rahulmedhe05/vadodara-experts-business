import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("kitchen-chimney-services")!;

export const metadata: Metadata = {
  title: "Bosch chimney service in Vadodara | Kitchen Chimney Services | VadodaraExperts",
  description: "Professional bosch chimney service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/kitchen-chimney-services/bosch-chimney-service-vadodara" },
  openGraph: {
    title: "Bosch chimney service in Vadodara | VadodaraExperts",
    description: "Professional bosch chimney service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/kitchen-chimney-services/bosch-chimney-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bosch-chimney-service-vadodara" />;
}
