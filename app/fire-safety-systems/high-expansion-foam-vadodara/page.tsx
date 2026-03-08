import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-systems")!;

export const metadata: Metadata = {
  title: "high expansion foam in Vadodara | Fire Safety Systems | VadodaraExperts",
  description: "Professional high expansion foam services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-systems/high-expansion-foam-vadodara" },
  openGraph: {
    title: "high expansion foam in Vadodara | VadodaraExperts",
    description: "Professional high expansion foam services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-systems/high-expansion-foam-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="high-expansion-foam-vadodara" />;
}
