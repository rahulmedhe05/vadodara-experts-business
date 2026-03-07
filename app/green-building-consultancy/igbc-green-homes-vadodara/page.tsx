import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "IGBC green homes in Vadodara | Green Building Consultancy | VadodaraExperts",
  description: "Professional igbc green homes services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy/igbc-green-homes-vadodara" },
  openGraph: {
    title: "IGBC green homes in Vadodara | VadodaraExperts",
    description: "Professional igbc green homes services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/green-building-consultancy/igbc-green-homes-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="igbc-green-homes-vadodara" />;
}
