import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-painting-services")!;

export const metadata: Metadata = {
  title: "Sand texture painting in Vadodara | Home Painting Services | VadodaraExperts",
  description: "Professional sand texture painting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-painting-services/sand-texture-painting-vadodara" },
  openGraph: {
    title: "Sand texture painting in Vadodara | VadodaraExperts",
    description: "Professional sand texture painting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-painting-services/sand-texture-painting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sand-texture-painting-vadodara" />;
}
