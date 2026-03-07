import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-systems")!;

export const metadata: Metadata = {
  title: "fire extinguisher in Vadodara | Fire Safety Systems | VadodaraExperts",
  description: "Professional fire extinguisher services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-systems/fire-extinguisher-vadodara" },
  openGraph: {
    title: "fire extinguisher in Vadodara | VadodaraExperts",
    description: "Professional fire extinguisher services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-systems/fire-extinguisher-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-extinguisher-vadodara" />;
}
