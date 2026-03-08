import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "AAC blocks in Vadodara | Green Building Consultancy | VadodaraExperts",
  description: "Professional aac blocks services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy/aac-blocks-vadodara" },
  openGraph: {
    title: "AAC blocks in Vadodara | VadodaraExperts",
    description: "Professional aac blocks services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/green-building-consultancy/aac-blocks-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="aac-blocks-vadodara" />;
}
