import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-painting-services")!;

export const metadata: Metadata = {
  title: "Metal primer painting in Vadodara | Home Painting Services | VadodaraExperts",
  description: "Professional metal primer painting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-painting-services/metal-primer-painting-vadodara" },
  openGraph: {
    title: "Metal primer painting in Vadodara | VadodaraExperts",
    description: "Professional metal primer painting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-painting-services/metal-primer-painting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="metal-primer-painting-vadodara" />;
}
