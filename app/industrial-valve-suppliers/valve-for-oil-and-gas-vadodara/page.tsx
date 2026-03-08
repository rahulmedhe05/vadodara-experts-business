import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-valve-suppliers")!;

export const metadata: Metadata = {
  title: "valve for oil and gas in Vadodara | Industrial Valve Suppliers | VadodaraExperts",
  description: "Professional valve for oil and gas services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-valve-suppliers/valve-for-oil-and-gas-vadodara" },
  openGraph: {
    title: "valve for oil and gas in Vadodara | VadodaraExperts",
    description: "Professional valve for oil and gas services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-valve-suppliers/valve-for-oil-and-gas-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="valve-for-oil-and-gas-vadodara" />;
}
