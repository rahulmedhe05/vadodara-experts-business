import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "wellness architecture in Vadodara | Green Building Consultancy | VadodaraExperts",
  description: "Professional wellness architecture services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy/wellness-architecture-vadodara" },
  openGraph: {
    title: "wellness architecture in Vadodara | VadodaraExperts",
    description: "Professional wellness architecture services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/green-building-consultancy/wellness-architecture-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wellness-architecture-vadodara" />;
}
