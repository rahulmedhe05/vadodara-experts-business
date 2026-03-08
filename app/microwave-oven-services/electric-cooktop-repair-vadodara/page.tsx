import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("microwave-oven-services")!;

export const metadata: Metadata = {
  title: "Electric cooktop repair in Vadodara | Microwave Oven Services | VadodaraExperts",
  description: "Professional electric cooktop repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/microwave-oven-services/electric-cooktop-repair-vadodara" },
  openGraph: {
    title: "Electric cooktop repair in Vadodara | VadodaraExperts",
    description: "Professional electric cooktop repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/microwave-oven-services/electric-cooktop-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="electric-cooktop-repair-vadodara" />;
}
