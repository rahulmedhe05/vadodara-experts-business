import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-services")!;

export const metadata: Metadata = {
  title: "Residential plumber in Vadodara | Plumbing Services | VadodaraExperts",
  description: "Professional residential plumber services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-services/residential-plumber-vadodara" },
  openGraph: {
    title: "Residential plumber in Vadodara | VadodaraExperts",
    description: "Professional residential plumber services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-services/residential-plumber-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="residential-plumber-vadodara" />;
}
