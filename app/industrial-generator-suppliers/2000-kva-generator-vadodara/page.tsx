import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-generator-suppliers")!;

export const metadata: Metadata = {
  title: "2000 kVA generator in Vadodara | Industrial Generator Suppliers | VadodaraExperts",
  description: "Professional 2000 kva generator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-generator-suppliers/2000-kva-generator-vadodara" },
  openGraph: {
    title: "2000 kVA generator in Vadodara | VadodaraExperts",
    description: "Professional 2000 kva generator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-generator-suppliers/2000-kva-generator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="2000-kva-generator-vadodara" />;
}
