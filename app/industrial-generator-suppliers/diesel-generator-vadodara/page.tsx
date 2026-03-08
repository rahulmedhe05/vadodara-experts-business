import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-generator-suppliers")!;

export const metadata: Metadata = {
  title: "diesel generator in Vadodara | Industrial Generator Suppliers | VadodaraExperts",
  description: "Professional diesel generator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-generator-suppliers/diesel-generator-vadodara" },
  openGraph: {
    title: "diesel generator in Vadodara | VadodaraExperts",
    description: "Professional diesel generator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-generator-suppliers/diesel-generator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="diesel-generator-vadodara" />;
}
