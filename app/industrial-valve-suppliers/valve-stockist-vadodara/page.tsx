import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-valve-suppliers")!;

export const metadata: Metadata = {
  title: "valve stockist in Vadodara | Industrial Valve Suppliers | VadodaraExperts",
  description: "Professional valve stockist services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-valve-suppliers/valve-stockist-vadodara" },
  openGraph: {
    title: "valve stockist in Vadodara | VadodaraExperts",
    description: "Professional valve stockist services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-valve-suppliers/valve-stockist-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="valve-stockist-vadodara" />;
}
