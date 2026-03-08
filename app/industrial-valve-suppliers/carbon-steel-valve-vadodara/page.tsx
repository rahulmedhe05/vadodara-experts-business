import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-valve-suppliers")!;

export const metadata: Metadata = {
  title: "carbon steel valve in Vadodara | Industrial Valve Suppliers | VadodaraExperts",
  description: "Professional carbon steel valve services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-valve-suppliers/carbon-steel-valve-vadodara" },
  openGraph: {
    title: "carbon steel valve in Vadodara | VadodaraExperts",
    description: "Professional carbon steel valve services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-valve-suppliers/carbon-steel-valve-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="carbon-steel-valve-vadodara" />;
}
