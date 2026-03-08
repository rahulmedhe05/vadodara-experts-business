import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("balcony-renovation-services")!;

export const metadata: Metadata = {
  title: "Balcony storage cabinet in Vadodara | Balcony Renovation Services | VadodaraExperts",
  description: "Professional balcony storage cabinet services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/balcony-renovation-services/balcony-storage-cabinet-vadodara" },
  openGraph: {
    title: "Balcony storage cabinet in Vadodara | VadodaraExperts",
    description: "Professional balcony storage cabinet services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/balcony-renovation-services/balcony-storage-cabinet-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="balcony-storage-cabinet-vadodara" />;
}
