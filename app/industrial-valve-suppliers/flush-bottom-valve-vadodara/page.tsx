import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-valve-suppliers")!;

export const metadata: Metadata = {
  title: "flush bottom valve in Vadodara | Industrial Valve Suppliers | VadodaraExperts",
  description: "Professional flush bottom valve services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-valve-suppliers/flush-bottom-valve-vadodara" },
  openGraph: {
    title: "flush bottom valve in Vadodara | VadodaraExperts",
    description: "Professional flush bottom valve services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-valve-suppliers/flush-bottom-valve-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="flush-bottom-valve-vadodara" />;
}
