import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "fire safety AMC in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional fire safety amc services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/fire-safety-amc-vadodara" },
  openGraph: {
    title: "fire safety AMC in Vadodara | VadodaraExperts",
    description: "Professional fire safety amc services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/fire-safety-amc-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-safety-amc-vadodara" />;
}
