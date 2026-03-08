import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("air-compressor-suppliers")!;

export const metadata: Metadata = {
  title: "separator element replacement in Vadodara | Air Compressor Suppliers | VadodaraExperts",
  description: "Professional separator element replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/air-compressor-suppliers/separator-element-replacement-vadodara" },
  openGraph: {
    title: "separator element replacement in Vadodara | VadodaraExperts",
    description: "Professional separator element replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/air-compressor-suppliers/separator-element-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="separator-element-replacement-vadodara" />;
}
