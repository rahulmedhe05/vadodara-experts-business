import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("glass-facade-installation")!;

export const metadata: Metadata = {
  title: "triple glazed glass in Vadodara | Glass Facade Installation | VadodaraExperts",
  description: "Professional triple glazed glass services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/glass-facade-installation/triple-glazed-glass-vadodara" },
  openGraph: {
    title: "triple glazed glass in Vadodara | VadodaraExperts",
    description: "Professional triple glazed glass services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/glass-facade-installation/triple-glazed-glass-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="triple-glazed-glass-vadodara" />;
}
