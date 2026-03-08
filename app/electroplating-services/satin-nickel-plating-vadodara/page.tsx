import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electroplating-services")!;

export const metadata: Metadata = {
  title: "satin nickel plating in Vadodara | Electroplating Services | VadodaraExperts",
  description: "Professional satin nickel plating services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electroplating-services/satin-nickel-plating-vadodara" },
  openGraph: {
    title: "satin nickel plating in Vadodara | VadodaraExperts",
    description: "Professional satin nickel plating services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electroplating-services/satin-nickel-plating-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="satin-nickel-plating-vadodara" />;
}
