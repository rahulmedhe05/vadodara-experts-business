import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("balcony-renovation-services")!;

export const metadata: Metadata = {
  title: "Balcony furniture in Vadodara | Balcony Renovation Services | VadodaraExperts",
  description: "Professional balcony furniture services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/balcony-renovation-services/balcony-furniture-vadodara" },
  openGraph: {
    title: "Balcony furniture in Vadodara | VadodaraExperts",
    description: "Professional balcony furniture services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/balcony-renovation-services/balcony-furniture-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="balcony-furniture-vadodara" />;
}
