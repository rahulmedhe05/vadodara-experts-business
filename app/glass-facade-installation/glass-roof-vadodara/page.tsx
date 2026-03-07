import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("glass-facade-installation")!;

export const metadata: Metadata = {
  title: "glass roof in Vadodara | Glass Facade Installation | VadodaraExperts",
  description: "Professional glass roof services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/glass-facade-installation/glass-roof-vadodara" },
  openGraph: {
    title: "glass roof in Vadodara | VadodaraExperts",
    description: "Professional glass roof services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/glass-facade-installation/glass-roof-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="glass-roof-vadodara" />;
}
