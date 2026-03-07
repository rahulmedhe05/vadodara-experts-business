import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("glass-facade-installation")!;

export const metadata: Metadata = {
  title: "operable glass wall in Vadodara | Glass Facade Installation | VadodaraExperts",
  description: "Professional operable glass wall services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/glass-facade-installation/operable-glass-wall-vadodara" },
  openGraph: {
    title: "operable glass wall in Vadodara | VadodaraExperts",
    description: "Professional operable glass wall services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/glass-facade-installation/operable-glass-wall-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="operable-glass-wall-vadodara" />;
}
