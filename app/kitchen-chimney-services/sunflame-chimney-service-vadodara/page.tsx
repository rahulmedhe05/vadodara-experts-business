import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("kitchen-chimney-services")!;

export const metadata: Metadata = {
  title: "Sunflame chimney service in Vadodara | Kitchen Chimney Services | VadodaraExperts",
  description: "Professional sunflame chimney service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/kitchen-chimney-services/sunflame-chimney-service-vadodara" },
  openGraph: {
    title: "Sunflame chimney service in Vadodara | VadodaraExperts",
    description: "Professional sunflame chimney service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/kitchen-chimney-services/sunflame-chimney-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sunflame-chimney-service-vadodara" />;
}
