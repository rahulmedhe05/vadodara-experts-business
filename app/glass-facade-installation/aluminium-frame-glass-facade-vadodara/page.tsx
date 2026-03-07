import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("glass-facade-installation")!;

export const metadata: Metadata = {
  title: "aluminium frame glass facade in Vadodara | Glass Facade Installation | VadodaraExperts",
  description: "Professional aluminium frame glass facade services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/glass-facade-installation/aluminium-frame-glass-facade-vadodara" },
  openGraph: {
    title: "aluminium frame glass facade in Vadodara | VadodaraExperts",
    description: "Professional aluminium frame glass facade services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/glass-facade-installation/aluminium-frame-glass-facade-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="aluminium-frame-glass-facade-vadodara" />;
}
