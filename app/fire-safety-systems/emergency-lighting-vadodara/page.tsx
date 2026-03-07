import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-systems")!;

export const metadata: Metadata = {
  title: "emergency lighting in Vadodara | Fire Safety Systems | VadodaraExperts",
  description: "Professional emergency lighting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-systems/emergency-lighting-vadodara" },
  openGraph: {
    title: "emergency lighting in Vadodara | VadodaraExperts",
    description: "Professional emergency lighting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-systems/emergency-lighting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="emergency-lighting-vadodara" />;
}
