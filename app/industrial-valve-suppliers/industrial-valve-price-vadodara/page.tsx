import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-valve-suppliers")!;

export const metadata: Metadata = {
  title: "industrial valve price in Vadodara | Industrial Valve Suppliers | VadodaraExperts",
  description: "Professional industrial valve price services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-valve-suppliers/industrial-valve-price-vadodara" },
  openGraph: {
    title: "industrial valve price in Vadodara | VadodaraExperts",
    description: "Professional industrial valve price services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-valve-suppliers/industrial-valve-price-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-valve-price-vadodara" />;
}
