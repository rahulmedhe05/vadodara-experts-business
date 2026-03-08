import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "daylighting design in Vadodara | Green Building Consultancy | VadodaraExperts",
  description: "Professional daylighting design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy/daylighting-design-vadodara" },
  openGraph: {
    title: "daylighting design in Vadodara | VadodaraExperts",
    description: "Professional daylighting design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/green-building-consultancy/daylighting-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="daylighting-design-vadodara" />;
}
