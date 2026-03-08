import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-pump-suppliers")!;

export const metadata: Metadata = {
  title: "pump impeller in Vadodara | Industrial Pump Suppliers | VadodaraExperts",
  description: "Professional pump impeller services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-pump-suppliers/pump-impeller-vadodara" },
  openGraph: {
    title: "pump impeller in Vadodara | VadodaraExperts",
    description: "Professional pump impeller services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-pump-suppliers/pump-impeller-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pump-impeller-vadodara" />;
}
