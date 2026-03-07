import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wedding-planning-services")!;

export const metadata: Metadata = {
  title: "Marriage hall in Vadodara | Wedding Planning Services | VadodaraExperts",
  description: "Professional marriage hall services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wedding-planning-services/marriage-hall-vadodara" },
  openGraph: {
    title: "Marriage hall in Vadodara | VadodaraExperts",
    description: "Professional marriage hall services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wedding-planning-services/marriage-hall-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="marriage-hall-vadodara" />;
}
