import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "green building retrofit in Vadodara | Green Building Consultancy | VadodaraExperts",
  description: "Professional green building retrofit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy/green-building-retrofit-vadodara" },
  openGraph: {
    title: "green building retrofit in Vadodara | VadodaraExperts",
    description: "Professional green building retrofit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/green-building-consultancy/green-building-retrofit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="green-building-retrofit-vadodara" />;
}
