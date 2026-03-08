import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-systems")!;

export const metadata: Metadata = {
  title: "fire safety services in Vadodara | Fire Safety Systems | VadodaraExperts",
  description: "Professional fire safety services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-systems/fire-safety-services-vadodara" },
  openGraph: {
    title: "fire safety services in Vadodara | VadodaraExperts",
    description: "Professional fire safety services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-systems/fire-safety-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-safety-services-vadodara" />;
}
