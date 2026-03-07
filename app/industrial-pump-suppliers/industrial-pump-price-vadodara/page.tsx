import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-pump-suppliers")!;

export const metadata: Metadata = {
  title: "industrial pump price in Vadodara | Industrial Pump Suppliers | VadodaraExperts",
  description: "Professional industrial pump price services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-pump-suppliers/industrial-pump-price-vadodara" },
  openGraph: {
    title: "industrial pump price in Vadodara | VadodaraExperts",
    description: "Professional industrial pump price services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-pump-suppliers/industrial-pump-price-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-pump-price-vadodara" />;
}
