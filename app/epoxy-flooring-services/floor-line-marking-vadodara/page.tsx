import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("epoxy-flooring-services")!;

export const metadata: Metadata = {
  title: "floor line marking in Vadodara | Epoxy Flooring Services | VadodaraExperts",
  description: "Professional floor line marking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/epoxy-flooring-services/floor-line-marking-vadodara" },
  openGraph: {
    title: "floor line marking in Vadodara | VadodaraExperts",
    description: "Professional floor line marking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/epoxy-flooring-services/floor-line-marking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="floor-line-marking-vadodara" />;
}
