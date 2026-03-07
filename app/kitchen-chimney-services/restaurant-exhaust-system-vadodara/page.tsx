import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("kitchen-chimney-services")!;

export const metadata: Metadata = {
  title: "Restaurant exhaust system in Vadodara | Kitchen Chimney Services | VadodaraExperts",
  description: "Professional restaurant exhaust system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/kitchen-chimney-services/restaurant-exhaust-system-vadodara" },
  openGraph: {
    title: "Restaurant exhaust system in Vadodara | VadodaraExperts",
    description: "Professional restaurant exhaust system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/kitchen-chimney-services/restaurant-exhaust-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="restaurant-exhaust-system-vadodara" />;
}
