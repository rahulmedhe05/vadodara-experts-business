import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-painting-services")!;

export const metadata: Metadata = {
  title: "Wood lacquer finish in Vadodara | Home Painting Services | VadodaraExperts",
  description: "Professional wood lacquer finish services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-painting-services/wood-lacquer-finish-vadodara" },
  openGraph: {
    title: "Wood lacquer finish in Vadodara | VadodaraExperts",
    description: "Professional wood lacquer finish services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-painting-services/wood-lacquer-finish-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wood-lacquer-finish-vadodara" />;
}
