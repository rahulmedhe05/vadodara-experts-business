import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-valve-suppliers")!;

export const metadata: Metadata = {
  title: "expansion valve in Vadodara | Industrial Valve Suppliers | VadodaraExperts",
  description: "Professional expansion valve services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-valve-suppliers/expansion-valve-vadodara" },
  openGraph: {
    title: "expansion valve in Vadodara | VadodaraExperts",
    description: "Professional expansion valve services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-valve-suppliers/expansion-valve-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="expansion-valve-vadodara" />;
}
