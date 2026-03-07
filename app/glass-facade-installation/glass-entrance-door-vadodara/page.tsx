import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("glass-facade-installation")!;

export const metadata: Metadata = {
  title: "glass entrance door in Vadodara | Glass Facade Installation | VadodaraExperts",
  description: "Professional glass entrance door services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/glass-facade-installation/glass-entrance-door-vadodara" },
  openGraph: {
    title: "glass entrance door in Vadodara | VadodaraExperts",
    description: "Professional glass entrance door services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/glass-facade-installation/glass-entrance-door-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="glass-entrance-door-vadodara" />;
}
