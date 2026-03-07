import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-construction")!;

export const metadata: Metadata = {
  title: "automated water pump in Vadodara | Smart Home Construction | VadodaraExperts",
  description: "Professional automated water pump services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-construction/automated-water-pump-vadodara" },
  openGraph: {
    title: "automated water pump in Vadodara | VadodaraExperts",
    description: "Professional automated water pump services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-construction/automated-water-pump-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="automated-water-pump-vadodara" />;
}
