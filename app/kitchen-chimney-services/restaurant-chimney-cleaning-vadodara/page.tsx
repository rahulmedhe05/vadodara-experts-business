import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("kitchen-chimney-services")!;

export const metadata: Metadata = {
  title: "Restaurant chimney cleaning in Vadodara | Kitchen Chimney Services | VadodaraExperts",
  description: "Professional restaurant chimney cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/kitchen-chimney-services/restaurant-chimney-cleaning-vadodara" },
  openGraph: {
    title: "Restaurant chimney cleaning in Vadodara | VadodaraExperts",
    description: "Professional restaurant chimney cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/kitchen-chimney-services/restaurant-chimney-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="restaurant-chimney-cleaning-vadodara" />;
}
