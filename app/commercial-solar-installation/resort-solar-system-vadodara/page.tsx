import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-solar-installation")!;

export const metadata: Metadata = {
  title: "resort solar system in Vadodara | Commercial Solar Installation | VadodaraExperts",
  description: "Professional resort solar system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-solar-installation/resort-solar-system-vadodara" },
  openGraph: {
    title: "resort solar system in Vadodara | VadodaraExperts",
    description: "Professional resort solar system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-solar-installation/resort-solar-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="resort-solar-system-vadodara" />;
}
