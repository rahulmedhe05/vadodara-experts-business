import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-generator-suppliers")!;

export const metadata: Metadata = {
  title: "KOEL generator in Vadodara | Industrial Generator Suppliers | VadodaraExperts",
  description: "Professional koel generator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-generator-suppliers/koel-generator-vadodara" },
  openGraph: {
    title: "KOEL generator in Vadodara | VadodaraExperts",
    description: "Professional koel generator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-generator-suppliers/koel-generator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="koel-generator-vadodara" />;
}
