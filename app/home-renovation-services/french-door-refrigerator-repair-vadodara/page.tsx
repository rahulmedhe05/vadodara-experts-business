import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-renovation-services")!;

export const metadata: Metadata = {
  title: "French door refrigerator repair in Vadodara | Home Renovation Services | VadodaraExperts",
  description: "Professional french door refrigerator repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-renovation-services/french-door-refrigerator-repair-vadodara" },
  openGraph: {
    title: "French door refrigerator repair in Vadodara | VadodaraExperts",
    description: "Professional french door refrigerator repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-renovation-services/french-door-refrigerator-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="french-door-refrigerator-repair-vadodara" />;
}
