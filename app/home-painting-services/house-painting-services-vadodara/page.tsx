import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-painting-services")!;

export const metadata: Metadata = {
  title: "House painting services in Vadodara | Home Painting Services | VadodaraExperts",
  description: "Professional house painting services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-painting-services/house-painting-services-vadodara" },
  openGraph: {
    title: "House painting services in Vadodara | VadodaraExperts",
    description: "Professional house painting services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-painting-services/house-painting-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="house-painting-services-vadodara" />;
}
