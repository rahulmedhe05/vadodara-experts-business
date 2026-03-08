import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-pump-suppliers")!;

export const metadata: Metadata = {
  title: "positive displacement pump in Vadodara | Industrial Pump Suppliers | VadodaraExperts",
  description: "Professional positive displacement pump services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-pump-suppliers/positive-displacement-pump-vadodara" },
  openGraph: {
    title: "positive displacement pump in Vadodara | VadodaraExperts",
    description: "Professional positive displacement pump services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-pump-suppliers/positive-displacement-pump-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="positive-displacement-pump-vadodara" />;
}
