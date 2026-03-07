import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "fire retardant paint in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional fire retardant paint services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/fire-retardant-paint-vadodara" },
  openGraph: {
    title: "fire retardant paint in Vadodara | VadodaraExperts",
    description: "Professional fire retardant paint services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/fire-retardant-paint-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-retardant-paint-vadodara" />;
}
