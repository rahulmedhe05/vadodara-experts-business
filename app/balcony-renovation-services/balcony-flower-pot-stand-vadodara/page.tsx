import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("balcony-renovation-services")!;

export const metadata: Metadata = {
  title: "Balcony flower pot stand in Vadodara | Balcony Renovation Services | VadodaraExperts",
  description: "Professional balcony flower pot stand services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/balcony-renovation-services/balcony-flower-pot-stand-vadodara" },
  openGraph: {
    title: "Balcony flower pot stand in Vadodara | VadodaraExperts",
    description: "Professional balcony flower pot stand services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/balcony-renovation-services/balcony-flower-pot-stand-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="balcony-flower-pot-stand-vadodara" />;
}
