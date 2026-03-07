import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plc-programming-services")!;

export const metadata: Metadata = {
  title: "PLC system integrator in Vadodara | PLC Programming Services | VadodaraExperts",
  description: "Professional plc system integrator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plc-programming-services/plc-system-integrator-vadodara" },
  openGraph: {
    title: "PLC system integrator in Vadodara | VadodaraExperts",
    description: "Professional plc system integrator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plc-programming-services/plc-system-integrator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plc-system-integrator-vadodara" />;
}
