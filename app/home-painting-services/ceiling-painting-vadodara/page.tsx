import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-painting-services")!;

export const metadata: Metadata = {
  title: "Ceiling painting in Vadodara | Home Painting Services | VadodaraExperts",
  description: "Professional ceiling painting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-painting-services/ceiling-painting-vadodara" },
  openGraph: {
    title: "Ceiling painting in Vadodara | VadodaraExperts",
    description: "Professional ceiling painting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-painting-services/ceiling-painting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ceiling-painting-vadodara" />;
}
