import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-painting-services")!;

export const metadata: Metadata = {
  title: "Old paint removal in Vadodara | Home Painting Services | VadodaraExperts",
  description: "Professional old paint removal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-painting-services/old-paint-removal-vadodara" },
  openGraph: {
    title: "Old paint removal in Vadodara | VadodaraExperts",
    description: "Professional old paint removal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-painting-services/old-paint-removal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="old-paint-removal-vadodara" />;
}
