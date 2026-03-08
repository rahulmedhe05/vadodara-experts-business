import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("balcony-renovation-services")!;

export const metadata: Metadata = {
  title: "Balcony folding furniture in Vadodara | Balcony Renovation Services | VadodaraExperts",
  description: "Professional balcony folding furniture services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/balcony-renovation-services/balcony-folding-furniture-vadodara" },
  openGraph: {
    title: "Balcony folding furniture in Vadodara | VadodaraExperts",
    description: "Professional balcony folding furniture services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/balcony-renovation-services/balcony-folding-furniture-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="balcony-folding-furniture-vadodara" />;
}
