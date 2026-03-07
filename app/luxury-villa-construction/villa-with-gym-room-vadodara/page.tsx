import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("luxury-villa-construction")!;

export const metadata: Metadata = {
  title: "villa with gym room in Vadodara | Luxury Villa Construction | VadodaraExperts",
  description: "Professional villa with gym room services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/luxury-villa-construction/villa-with-gym-room-vadodara" },
  openGraph: {
    title: "villa with gym room in Vadodara | VadodaraExperts",
    description: "Professional villa with gym room services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/luxury-villa-construction/villa-with-gym-room-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="villa-with-gym-room-vadodara" />;
}
