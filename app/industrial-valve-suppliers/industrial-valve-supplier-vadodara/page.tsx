import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-valve-suppliers")!;

export const metadata: Metadata = {
  title: "industrial valve supplier in Vadodara | Industrial Valve Suppliers | VadodaraExperts",
  description: "Professional industrial valve supplier services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-valve-suppliers/industrial-valve-supplier-vadodara" },
  openGraph: {
    title: "industrial valve supplier in Vadodara | VadodaraExperts",
    description: "Professional industrial valve supplier services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-valve-suppliers/industrial-valve-supplier-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-valve-supplier-vadodara" />;
}
