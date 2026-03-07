import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "water mist system in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional water mist system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/water-mist-system-vadodara" },
  openGraph: {
    title: "water mist system in Vadodara | VadodaraExperts",
    description: "Professional water mist system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/water-mist-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-mist-system-vadodara" />;
}
