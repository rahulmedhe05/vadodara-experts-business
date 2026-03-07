import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-systems")!;

export const metadata: Metadata = {
  title: "intelligent fire alarm in Vadodara | Fire Safety Systems | VadodaraExperts",
  description: "Professional intelligent fire alarm services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-systems/intelligent-fire-alarm-vadodara" },
  openGraph: {
    title: "intelligent fire alarm in Vadodara | VadodaraExperts",
    description: "Professional intelligent fire alarm services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-systems/intelligent-fire-alarm-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="intelligent-fire-alarm-vadodara" />;
}
