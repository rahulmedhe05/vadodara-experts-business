import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "flame detector in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional flame detector services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/flame-detector-vadodara" },
  openGraph: {
    title: "flame detector in Vadodara | VadodaraExperts",
    description: "Professional flame detector services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/flame-detector-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="flame-detector-vadodara" />;
}
