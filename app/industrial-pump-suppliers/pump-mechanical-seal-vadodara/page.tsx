import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-pump-suppliers")!;

export const metadata: Metadata = {
  title: "pump mechanical seal in Vadodara | Industrial Pump Suppliers | VadodaraExperts",
  description: "Professional pump mechanical seal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-pump-suppliers/pump-mechanical-seal-vadodara" },
  openGraph: {
    title: "pump mechanical seal in Vadodara | VadodaraExperts",
    description: "Professional pump mechanical seal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-pump-suppliers/pump-mechanical-seal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pump-mechanical-seal-vadodara" />;
}
