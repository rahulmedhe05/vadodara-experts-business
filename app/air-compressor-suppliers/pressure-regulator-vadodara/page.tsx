import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("air-compressor-suppliers")!;

export const metadata: Metadata = {
  title: "pressure regulator in Vadodara | Air Compressor Suppliers | VadodaraExperts",
  description: "Professional pressure regulator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/air-compressor-suppliers/pressure-regulator-vadodara" },
  openGraph: {
    title: "pressure regulator in Vadodara | VadodaraExperts",
    description: "Professional pressure regulator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/air-compressor-suppliers/pressure-regulator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pressure-regulator-vadodara" />;
}
