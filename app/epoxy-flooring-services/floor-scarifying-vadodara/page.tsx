import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("epoxy-flooring-services")!;

export const metadata: Metadata = {
  title: "floor scarifying in Vadodara | Epoxy Flooring Services | VadodaraExperts",
  description: "Professional floor scarifying services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/epoxy-flooring-services/floor-scarifying-vadodara" },
  openGraph: {
    title: "floor scarifying in Vadodara | VadodaraExperts",
    description: "Professional floor scarifying services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/epoxy-flooring-services/floor-scarifying-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="floor-scarifying-vadodara" />;
}
