import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("balcony-renovation-services")!;

export const metadata: Metadata = {
  title: "Balcony tile joint waterproofing in Vadodara | Balcony Renovation Services | VadodaraExperts",
  description: "Professional balcony tile joint waterproofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/balcony-renovation-services/balcony-tile-joint-waterproofing-vadodara" },
  openGraph: {
    title: "Balcony tile joint waterproofing in Vadodara | VadodaraExperts",
    description: "Professional balcony tile joint waterproofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/balcony-renovation-services/balcony-tile-joint-waterproofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="balcony-tile-joint-waterproofing-vadodara" />;
}
