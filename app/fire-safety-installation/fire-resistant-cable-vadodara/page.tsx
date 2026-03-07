import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "fire resistant cable in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional fire resistant cable services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/fire-resistant-cable-vadodara" },
  openGraph: {
    title: "fire resistant cable in Vadodara | VadodaraExperts",
    description: "Professional fire resistant cable services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/fire-resistant-cable-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-resistant-cable-vadodara" />;
}
