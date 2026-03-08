import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-ro-plants")!;

export const metadata: Metadata = {
  title: "RO high pressure pump in Vadodara | Industrial RO Plants | VadodaraExperts",
  description: "Professional ro high pressure pump services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-ro-plants/ro-high-pressure-pump-vadodara" },
  openGraph: {
    title: "RO high pressure pump in Vadodara | VadodaraExperts",
    description: "Professional ro high pressure pump services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-ro-plants/ro-high-pressure-pump-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ro-high-pressure-pump-vadodara" />;
}
