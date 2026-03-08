import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("glass-facade-installation")!;

export const metadata: Metadata = {
  title: "full height glazing in Vadodara | Glass Facade Installation | VadodaraExperts",
  description: "Professional full height glazing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/glass-facade-installation/full-height-glazing-vadodara" },
  openGraph: {
    title: "full height glazing in Vadodara | VadodaraExperts",
    description: "Professional full height glazing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/glass-facade-installation/full-height-glazing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="full-height-glazing-vadodara" />;
}
