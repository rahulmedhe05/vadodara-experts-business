import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("balcony-renovation-services")!;

export const metadata: Metadata = {
  title: "Balcony vertical garden in Vadodara | Balcony Renovation Services | VadodaraExperts",
  description: "Professional balcony vertical garden services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/balcony-renovation-services/balcony-vertical-garden-vadodara" },
  openGraph: {
    title: "Balcony vertical garden in Vadodara | VadodaraExperts",
    description: "Professional balcony vertical garden services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/balcony-renovation-services/balcony-vertical-garden-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="balcony-vertical-garden-vadodara" />;
}
