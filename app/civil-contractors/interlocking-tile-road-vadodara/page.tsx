import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("civil-contractors")!;

export const metadata: Metadata = {
  title: "Interlocking tile road in Vadodara | Civil Contractors | VadodaraExperts",
  description: "Professional interlocking tile road services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/civil-contractors/interlocking-tile-road-vadodara" },
  openGraph: {
    title: "Interlocking tile road in Vadodara | VadodaraExperts",
    description: "Professional interlocking tile road services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/civil-contractors/interlocking-tile-road-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="interlocking-tile-road-vadodara" />;
}
