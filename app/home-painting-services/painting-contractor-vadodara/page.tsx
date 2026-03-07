import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-painting-services")!;

export const metadata: Metadata = {
  title: "Painting contractor in Vadodara | Home Painting Services | VadodaraExperts",
  description: "Professional painting contractor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-painting-services/painting-contractor-vadodara" },
  openGraph: {
    title: "Painting contractor in Vadodara | VadodaraExperts",
    description: "Professional painting contractor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-painting-services/painting-contractor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="painting-contractor-vadodara" />;
}
