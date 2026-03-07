import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("glass-facade-installation")!;

export const metadata: Metadata = {
  title: "high rise glass facade in Vadodara | Glass Facade Installation | VadodaraExperts",
  description: "Professional high rise glass facade services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/glass-facade-installation/high-rise-glass-facade-vadodara" },
  openGraph: {
    title: "high rise glass facade in Vadodara | VadodaraExperts",
    description: "Professional high rise glass facade services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/glass-facade-installation/high-rise-glass-facade-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="high-rise-glass-facade-vadodara" />;
}
