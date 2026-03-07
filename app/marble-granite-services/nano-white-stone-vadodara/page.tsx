import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("marble-granite-services")!;

export const metadata: Metadata = {
  title: "Nano white stone in Vadodara | Marble & Granite Services | VadodaraExperts",
  description: "Professional nano white stone services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/marble-granite-services/nano-white-stone-vadodara" },
  openGraph: {
    title: "Nano white stone in Vadodara | VadodaraExperts",
    description: "Professional nano white stone services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/marble-granite-services/nano-white-stone-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="nano-white-stone-vadodara" />;
}
