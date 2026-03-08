import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wedding-planning-services")!;

export const metadata: Metadata = {
  title: "Bridal lehenga in Vadodara | Wedding Planning Services | VadodaraExperts",
  description: "Professional bridal lehenga services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wedding-planning-services/bridal-lehenga-vadodara" },
  openGraph: {
    title: "Bridal lehenga in Vadodara | VadodaraExperts",
    description: "Professional bridal lehenga services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wedding-planning-services/bridal-lehenga-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bridal-lehenga-vadodara" />;
}
