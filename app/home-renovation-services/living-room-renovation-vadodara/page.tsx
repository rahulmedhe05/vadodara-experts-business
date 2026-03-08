import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-renovation-services")!;

export const metadata: Metadata = {
  title: "Living room renovation in Vadodara | Home Renovation Services | VadodaraExperts",
  description: "Professional living room renovation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-renovation-services/living-room-renovation-vadodara" },
  openGraph: {
    title: "Living room renovation in Vadodara | VadodaraExperts",
    description: "Professional living room renovation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-renovation-services/living-room-renovation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="living-room-renovation-vadodara" />;
}
