import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-valve-suppliers")!;

export const metadata: Metadata = {
  title: "hydraulic actuator in Vadodara | Industrial Valve Suppliers | VadodaraExperts",
  description: "Professional hydraulic actuator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-valve-suppliers/hydraulic-actuator-vadodara" },
  openGraph: {
    title: "hydraulic actuator in Vadodara | VadodaraExperts",
    description: "Professional hydraulic actuator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-valve-suppliers/hydraulic-actuator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hydraulic-actuator-vadodara" />;
}
