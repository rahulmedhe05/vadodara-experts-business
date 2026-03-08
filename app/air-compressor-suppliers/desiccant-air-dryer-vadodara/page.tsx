import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("air-compressor-suppliers")!;

export const metadata: Metadata = {
  title: "desiccant air dryer in Vadodara | Air Compressor Suppliers | VadodaraExperts",
  description: "Professional desiccant air dryer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/air-compressor-suppliers/desiccant-air-dryer-vadodara" },
  openGraph: {
    title: "desiccant air dryer in Vadodara | VadodaraExperts",
    description: "Professional desiccant air dryer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/air-compressor-suppliers/desiccant-air-dryer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="desiccant-air-dryer-vadodara" />;
}
