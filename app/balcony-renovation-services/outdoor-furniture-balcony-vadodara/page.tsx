import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("balcony-renovation-services")!;

export const metadata: Metadata = {
  title: "Outdoor furniture balcony in Vadodara | Balcony Renovation Services | VadodaraExperts",
  description: "Professional outdoor furniture balcony services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/balcony-renovation-services/outdoor-furniture-balcony-vadodara" },
  openGraph: {
    title: "Outdoor furniture balcony in Vadodara | VadodaraExperts",
    description: "Professional outdoor furniture balcony services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/balcony-renovation-services/outdoor-furniture-balcony-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="outdoor-furniture-balcony-vadodara" />;
}
