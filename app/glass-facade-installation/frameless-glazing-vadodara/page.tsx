import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("glass-facade-installation")!;

export const metadata: Metadata = {
  title: "frameless glazing in Vadodara | Glass Facade Installation | VadodaraExperts",
  description: "Professional frameless glazing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/glass-facade-installation/frameless-glazing-vadodara" },
  openGraph: {
    title: "frameless glazing in Vadodara | VadodaraExperts",
    description: "Professional frameless glazing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/glass-facade-installation/frameless-glazing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="frameless-glazing-vadodara" />;
}
