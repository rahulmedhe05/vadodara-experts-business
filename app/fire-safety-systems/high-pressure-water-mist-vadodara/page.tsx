import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-systems")!;

export const metadata: Metadata = {
  title: "high pressure water mist in Vadodara | Fire Safety Systems | VadodaraExperts",
  description: "Professional high pressure water mist services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-systems/high-pressure-water-mist-vadodara" },
  openGraph: {
    title: "high pressure water mist in Vadodara | VadodaraExperts",
    description: "Professional high pressure water mist services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-systems/high-pressure-water-mist-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="high-pressure-water-mist-vadodara" />;
}
