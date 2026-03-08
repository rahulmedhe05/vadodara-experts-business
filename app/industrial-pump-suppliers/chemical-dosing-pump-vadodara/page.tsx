import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-pump-suppliers")!;

export const metadata: Metadata = {
  title: "chemical dosing pump in Vadodara | Industrial Pump Suppliers | VadodaraExperts",
  description: "Professional chemical dosing pump services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-pump-suppliers/chemical-dosing-pump-vadodara" },
  openGraph: {
    title: "chemical dosing pump in Vadodara | VadodaraExperts",
    description: "Professional chemical dosing pump services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-pump-suppliers/chemical-dosing-pump-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chemical-dosing-pump-vadodara" />;
}
