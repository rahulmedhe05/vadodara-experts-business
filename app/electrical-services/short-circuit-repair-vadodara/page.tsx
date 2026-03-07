import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-services")!;

export const metadata: Metadata = {
  title: "Short circuit repair in Vadodara | Electrical Services | VadodaraExperts",
  description: "Professional short circuit repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-services/short-circuit-repair-vadodara" },
  openGraph: {
    title: "Short circuit repair in Vadodara | VadodaraExperts",
    description: "Professional short circuit repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-services/short-circuit-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="short-circuit-repair-vadodara" />;
}
