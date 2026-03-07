import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-systems")!;

export const metadata: Metadata = {
  title: "fire seal in Vadodara | Fire Safety Systems | VadodaraExperts",
  description: "Professional fire seal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-systems/fire-seal-vadodara" },
  openGraph: {
    title: "fire seal in Vadodara | VadodaraExperts",
    description: "Professional fire seal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-systems/fire-seal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-seal-vadodara" />;
}
