import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-painting-services")!;

export const metadata: Metadata = {
  title: "Washable paint work in Vadodara | Home Painting Services | VadodaraExperts",
  description: "Professional washable paint work services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-painting-services/washable-paint-work-vadodara" },
  openGraph: {
    title: "Washable paint work in Vadodara | VadodaraExperts",
    description: "Professional washable paint work services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-painting-services/washable-paint-work-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="washable-paint-work-vadodara" />;
}
