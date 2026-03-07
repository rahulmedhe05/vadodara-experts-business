import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-systems")!;

export const metadata: Metadata = {
  title: "beam smoke detector in Vadodara | Fire Safety Systems | VadodaraExperts",
  description: "Professional beam smoke detector services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-systems/beam-smoke-detector-vadodara" },
  openGraph: {
    title: "beam smoke detector in Vadodara | VadodaraExperts",
    description: "Professional beam smoke detector services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-systems/beam-smoke-detector-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="beam-smoke-detector-vadodara" />;
}
