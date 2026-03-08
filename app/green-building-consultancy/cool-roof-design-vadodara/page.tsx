import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "cool roof design in Vadodara | Green Building Consultancy | VadodaraExperts",
  description: "Professional cool roof design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy/cool-roof-design-vadodara" },
  openGraph: {
    title: "cool roof design in Vadodara | VadodaraExperts",
    description: "Professional cool roof design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/green-building-consultancy/cool-roof-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cool-roof-design-vadodara" />;
}
