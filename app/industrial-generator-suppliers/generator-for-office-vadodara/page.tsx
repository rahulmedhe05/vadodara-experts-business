import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-generator-suppliers")!;

export const metadata: Metadata = {
  title: "generator for office in Vadodara | Industrial Generator Suppliers | VadodaraExperts",
  description: "Professional generator for office services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-generator-suppliers/generator-for-office-vadodara" },
  openGraph: {
    title: "generator for office in Vadodara | VadodaraExperts",
    description: "Professional generator for office services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-generator-suppliers/generator-for-office-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="generator-for-office-vadodara" />;
}
