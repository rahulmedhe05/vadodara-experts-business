import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "ABC fire extinguisher in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional abc fire extinguisher services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/abc-fire-extinguisher-vadodara" },
  openGraph: {
    title: "ABC fire extinguisher in Vadodara | VadodaraExperts",
    description: "Professional abc fire extinguisher services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/abc-fire-extinguisher-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="abc-fire-extinguisher-vadodara" />;
}
