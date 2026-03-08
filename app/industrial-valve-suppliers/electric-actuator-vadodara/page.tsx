import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-valve-suppliers")!;

export const metadata: Metadata = {
  title: "electric actuator in Vadodara | Industrial Valve Suppliers | VadodaraExperts",
  description: "Professional electric actuator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-valve-suppliers/electric-actuator-vadodara" },
  openGraph: {
    title: "electric actuator in Vadodara | VadodaraExperts",
    description: "Professional electric actuator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-valve-suppliers/electric-actuator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="electric-actuator-vadodara" />;
}
