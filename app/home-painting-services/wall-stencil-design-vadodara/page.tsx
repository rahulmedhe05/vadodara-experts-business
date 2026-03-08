import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-painting-services")!;

export const metadata: Metadata = {
  title: "Wall stencil design in Vadodara | Home Painting Services | VadodaraExperts",
  description: "Professional wall stencil design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-painting-services/wall-stencil-design-vadodara" },
  openGraph: {
    title: "Wall stencil design in Vadodara | VadodaraExperts",
    description: "Professional wall stencil design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-painting-services/wall-stencil-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wall-stencil-design-vadodara" />;
}
