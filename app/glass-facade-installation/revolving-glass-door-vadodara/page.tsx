import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("glass-facade-installation")!;

export const metadata: Metadata = {
  title: "revolving glass door in Vadodara | Glass Facade Installation | VadodaraExperts",
  description: "Professional revolving glass door services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/glass-facade-installation/revolving-glass-door-vadodara" },
  openGraph: {
    title: "revolving glass door in Vadodara | VadodaraExperts",
    description: "Professional revolving glass door services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/glass-facade-installation/revolving-glass-door-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="revolving-glass-door-vadodara" />;
}
