import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plc-programming-services")!;

export const metadata: Metadata = {
  title: "Studio 5000 programming in Vadodara | PLC Programming Services | VadodaraExperts",
  description: "Professional studio 5000 programming services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plc-programming-services/studio-5000-programming-vadodara" },
  openGraph: {
    title: "Studio 5000 programming in Vadodara | VadodaraExperts",
    description: "Professional studio 5000 programming services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plc-programming-services/studio-5000-programming-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="studio-5000-programming-vadodara" />;
}
